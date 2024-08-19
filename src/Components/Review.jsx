import React, { useState } from "react"
import axios from {axios}

const initialReview = [
    {
        profile: "",
        date:"24/01/2024",
        experience: "My experience so far with the furniro sitting room chair ist hat it is reliable and viable.easy to fold and doesnt go downn five years.get yourself a good furniro sitting room chairtoday and you wont regret it"
        
    },
    {
        profile: "",
        date:"21/01/2023",
        experience: "My experience so far with the furniro sitting room chair ist hat it is reliable and viable.easy to fold and doesnt go downn five years.get yourself a good furniro sitting room chairtoday and you wont regret it"
        
    }
]


const Review = ()=>{
    const[exp,setExp] = useState("")
    const[reviews,setReviews] = useState(initialReview)

   
  const handleInputChange = (e) => {
    setExp(e.target.value);
  };

  const handleKeyChange = (e)=>{
    if(e.key === 'Enter'){
        e.preventDefault();
        // console.log("key pressed")
        handleSubmit();
    }
  }

const handleSubmit = async (e) => {
  if (e) e.preventDefault();
  if (exp.trim()) {
    try {
      const productID = "66c0d72d9f0d5c7ff9d1dbbd";
      const response = await axios.post(
        `https://funiro-furnitures.onrender.com/product/${productID}/comment`,
        { comment: exp },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmFkMjUzMTk1YmE3NTMwNDgwMWY0ZDQiLCJmaXJzdE5hbWUiOiJhZGUiLCJsYXN0TmFtZSI6Im1pa2UiLCJlbWFpbCI6ImFkZWt1bmxlcmFqYWgxM0BnbWFpbC5jb20iLCJpYXQiOjE3MjQwNzA0MjgsImV4cCI6MTcyNDI0MzIyOH0.wZQueK8DVJsn8Jj9U_SlQvDhbNLTIPl0pgVF5fg2iEo`
          }
        }
      );
      if (response.status === 201) {
        setReviews([
          ...reviews,
          {
            profile: "", // Update with actual user profile if available
            date: new Date().toLocaleDateString("en-GB"),
            experience: exp
          }
        ]);
        setExp("");
        console.log("Comment added successfully");
      }
    } catch (error) {
      console.error("Error posting comment", error);
    }
  }
};

    return(
        <div className="w-full flex flex-col gap-4 lg:gap-8 lg:px-20">
            {reviews.map((review,index)=>(
                <div key={index} className="w-full text-sm flex flex-col lg:flex-row gap-4 lg:gap-10 text-[#9F9F9F]">
                    <div>
                        <div className="w-14 h-14 flex items-center justify-center text-lg -bg--clr-primary text-white rounded-full">
                            XL
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
                className="relative w-full py-8 mt-3 border pl-4 rounded-lg text-xs -border--clr-primary outline-none "/>
                {/* <button onClick={handleSubmit} className="absolute right-9 lg:right-28 mt-8 w-12 h-12 rounded-full -bg--clr-primary">
                    <i  class='bx bxs-send text-white'></i>
                </button> */}
            </div>
        </div>
    )
}

export default Review