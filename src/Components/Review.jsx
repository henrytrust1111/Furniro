import React, { useState } from "react";

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
// const [loading,setLoading] =useState()

const Review = () => {
  const [exp, setExp] = useState("");
  const [reviews, setReviews] = useState(initialReview);
  const [loading, setLoading] = useState(false);
  //   const [feedback,setfeeback] = useState("")

  const handleInputChange = (e) => {
    setExp(e.target.value);
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
      setLoading(true); // Start loading
      try {
        const productID = "66c5eb7ee9acad10fd78fa65";
        const response = await fetch(
          `https://funiro-furnitures.onrender.com/product/${productID}/comment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmFkMjUzMTk1YmE3NTMwNDgwMWY0ZDQiLCJmaXJzdE5hbWUiOiJhZGUiLCJsYXN0TmFtZSI6Im1pa2UiLCJlbWFpbCI6ImFkZWt1bmxlcmFqYWgxM0BnbWFpbC5jb20iLCJpYXQiOjE3MjQzMTc5NDcsImV4cCI6MTcyNDQ5MDc0N30.2hXHvysaUM7TuZzPvN2iT_KvqO6hYpOo550KDC38EYI`,
            },
            body: JSON.stringify({ comment: exp }),
          }
        );

        const data = await response.json();

        if (response.ok) {
          // Adjusted: Use fullName instead of name
          if (data.comment && data.comment.fullName) {
            const initials = `${data.comment.fullName.split(" ")[0][0]}${
              data.comment.fullName.split(" ")[1][0]
            }`.toUpperCase();

            // Update the reviews state with the new comment
            setReviews([
              ...reviews,
              {
                name: initials,
                profile: "",
                date: new Date().toLocaleDateString("en-GB"),
                experience: exp,
              },
            ]);

            setExp(""); // Clear the input field after submission
            console.log("Comment posted:", data);
          } else {
            console.error("Failed to get user's full name for initials:", data);
          }
        } else {
          console.error("Failed to comment:", data.error);
        }
      } catch (error) {
        console.error("Error posting comment:", error);
      } finally {
        setLoading(false); // End loading
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
      <div className="mt-6 lg:mt-14">
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
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full border-t-2 border-gray-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
