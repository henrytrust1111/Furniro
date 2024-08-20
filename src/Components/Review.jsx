import React, { useState } from "react";

const initialReview = [
  {
    profile: "",
    date: "24/01/2024",
    experience: "My experience so far with the furniro sitting room chair is that it is reliable and viable. Easy to fold and doesn't go down in five years. Get yourself a good furniro sitting room chair today, and you won't regret it."
  },
  {
    profile: "",
    date: "21/01/2023",
    experience: "My experience so far with the furniro sitting room chair is that it is reliable and viable. Easy to fold and doesn't go down in five years. Get yourself a good furniro sitting room chair today, and you won't regret it."
  }
];

const Review = () => {
  const [exp, setExp] = useState("");
  const [reviews, setReviews] = useState(initialReview);

  const handleInputChange = (e) => {
    setExp(e.target.value);
  };

  const handleKeyChange = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (exp.trim()) {
      try {
        const productID = "66c0d72d9f0d5c7ff9d1dbbd";
        const response = await fetch(`https://funiro-furnitures.onrender.com/product/${productID}/comment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmFkMjUzMTk1YmE3NTMwNDgwMWY0ZDQiLCJmaXJzdE5hbWUiOiJhZGUiLCJsYXN0TmFtZSI6Im1pa2UiLCJlbWFpbCI6ImFkZWt1bmxlcmFqYWgxM0BnbWFpbC5jb20iLCJpYXQiOjE3MjQwNzA0MjgsImV4cCI6MTcyNDI0MzIyOH0.wZQueK8DVJsn8Jj9U_SlQvDhbNLTIPl0pgVF5fg2iEo`
          },
          body: JSON.stringify({ comment: exp })
        });

        const data = await response.json();

        if (response.ok) {
            const initials = `${data.comment.user.name.split(' ')[0][0]}${data.comment.user.name.split(' ')[1][0]}`.toUpperCase();
          setReviews([...reviews, {
            name:initials,
            profile: "", // Update with actual user profile if available
            date: new Date().toLocaleDateString("en-GB"),
            experience: exp
          }]);
          setExp("");
          console.log("Comment posted:", data);
        } else {
          console.error("Failed to comment:", data.error);
        }
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-8 lg:px-20">
      {reviews.map((review, index) => (
        <div key={index} className="w-full text-sm flex flex-col lg:flex-row gap-4 lg:gap-10 text-[#9F9F9F]">
          <div>
            <div className="w-14 h-14 flex items-center justify-center text-lg -bg--clr-primary text-white rounded-full">
              {review.name}
            </div>
          </div>

          <div className="max-w-[500px] flex flex-col gap-3">
            <p className="text-xs lg:text-sm">{review.date}</p>
            <p className="text-xs lg:text-sm">
              {review.experience}
            </p>
            <div className="flex lg:hidden w-full h-[0.8px] border-b"></div>
          </div>
        </div>
      ))}
      <div className="mt-6 lg:mt-14">
        <label className="text-xs lg:text-sm">Enter Review:</label> <br />
        <input type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyChange}
          value={exp}
          className="relative w-full py-8 mt-3 border pl-4 rounded-lg text-xs -border--clr-primary outline-none" />
      </div>
    </div>
  );
};

export default Review;
