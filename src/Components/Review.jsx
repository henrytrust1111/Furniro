import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const initialReview = [
  {
    profile: "",
    date: "24/01/2024",
    experience:
      "My experience so far with the furniro sitting room chair is that it is reliable and viable. Easy to fold and doesn't go down in five years. Get yourself a good furniro sitting room chair today, and you won't regret it.",
  },
  {
    profile: "",
    date: "21/01/2023",
    experience:
      "My experience so far with the furniro sitting room chair is that it is reliable and viable. Easy to fold and doesn't go down in five years. Get yourself a good furniro sitting room chair today, and you won't regret it.",
  },
];

const Review = () => {
  const [exp, setExp] = useState("");
  const [reviews, setReviews] = useState(initialReview);
  const [loading, setLoading] = useState(false);
  const { productID } = useParams();
  const navigate = useNavigate();  // <-- Moved to the top level

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://funiro-furnitures.onrender.com/get-one-product/${productID}`
      );
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [productID]);

  const handleInputChange = (e) => {
    let value = e.target.value;

    // Automatically add a newline when the text reaches a certain length
    if (value.length >= 20 && value.length % 20 === 0) {
      value += "\n";
    }

    setExp(value);
  };

  const handleKeyChange = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (exp.trim()) {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        console.log("Retrieved Token:", token);

        if (!token) {
          throw new Error("No token found. Please log in.");
        }
        const response = await fetch(
          `https://funiro-furnitures.onrender.com/product/${productID}/comment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ comment: exp }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          if (data.comment && data.comment.fullName) {
            const initials = `${data.comment.fullName.split(" ")[0][0]}${
              data.comment.fullName.split(" ")[1][0]
            }`.toUpperCase();
            setReviews([
              ...reviews,
              {
                name: initials,
                profile: "",
                date: new Date().toLocaleDateString("en-GB"),
                experience: exp,
              },
            ]);

            setExp("");
            console.log("Comment posted:", data);
          } else {
            console.error("Failed to get user's full name for initials:", data);
          }
        } else {
          console.error("Failed to comment:", data.error);
        }
      } catch (error) {
        console.error("Error:", error.message);
        if (error.message === "No token found. Please log in.") {
          navigate('/login'); // Redirect to login page
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-8 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="w-full text-sm gap-4 text-[#9F9F9F]">
            <div>
              <div className="w-14 h-14 flex mb-3 items-center justify-center text-lg -bg--clr-primary text-white rounded-full">
                {review.name}
              </div>
            </div>
            <div className="max-w-[500px] flex flex-col gap-3">
              <p className="text-xs lg:text-sm">{review.date}</p>
              <p className="text-xs lg:text-sm">{review.experience}</p>
              <div className="flex lg:hidden w-full h-[0.8px] border-b"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 lg:mt-14 relative">
        <label className="text-xs lg:text-sm">Enter Review:</label> <br />
        <input
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyChange}
          value={exp}
          className={`relative w-full py-8 mt-3 border pl-4 rounded-lg text-xs -border--clr-primary outline-none ${
            loading ? "opacity-50" : ""
          }`}
          disabled={loading} // Disable input while loading
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="absolute text-[24px] lg:text-[28px] -text--clr-primary right-4 lg:right-10 mt-10"
        >
          {loading ? (
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-t-2 border-gray-500"></div>
          ) : (
            <i className="bx bxs-send"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Review;
