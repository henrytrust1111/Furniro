import React, { useEffect, useState } from "react";
import BlogHero from "./BlogHero";
import ScrollToTop from "../../Containers/ScrollToTop";
import { FaUser, FaCalendarAlt, FaTag, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "/icons/logo.svg";
import axios from "axios";

const RecentPost = () => {
    const [recentPost, setRecentPost] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noRecentPost, setNoRecentPost] = useState(false);

  const fetchRecentPost = async () => {
    try {
      const response = await axios.get(
        "https://funiro-furnitures.onrender.com/recentPost?limit=5"
      );
      console.log(response.data)
      // toast.success(response.data.message);
      const postsData = response.data.data;
      if (response.data.data.length === 0) {
        setNoRecentPost(true);
      } else {
        setRecentPost(postsData);        
        setNoRecentPost(false);
      }
    } catch (err) {
      setError("Network Error");
      // toast.error("Network Error");
      toast.error(err.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecentPost();
  }, []);

  const formattedDate = (dateString) => {
    const date = new Date(dateString);

    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const handlePostClick = (post) => {
    navigate(`/single-blog/${post._id}`, { state: { post } });
  };

  if (loading) {
    return (
      <section className="py-16 font-[poppins]">
        <div className="container mx-auto px-4 text-center -text--clr-primary flex items-center justify-center">
          <img src={logo} alt="" className="mr-2 animate-spin " />
          <p className="text-lg font-semibold">Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 font-[poppins]">
        <div className="container mx-auto px-4 text-center grid place-items-center">
          <p className="text-lg font-semibold text-red-500">Network Error</p>
          <button
            onClick={handleRefresh}
            className="mt-4 -bg--clr-primar-light-v1 text--clr-primary px-4 py-2 border border--clr-primary flex items-center gap-2 hover:scale-110 font-semibold"
          >
            <BiRefresh size={20} />
            Refresh
          </button>
        </div>
      </section>
    );
  }

  if (noRecentPost) {
    return (
      <section className="py-16 font-[poppins]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">No Recent Posts Available</p>
        </div>
      </section>
    );
  }

  return (
    <div>
    <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
    <ul className="space-y-4">
      {recentPost?.map((post, index) => (
        <li key={index} className="flex items-start" onClick={() => handlePostClick(post)}>
          <img
            src={post.image.url}
            alt={post.title}
            className="w-16 h-16 object-cover rounded mr-4"
          />
          <div>
            <span
              href="#"
              className="text-black text-sm hover:underline font-[Poppins] cursor-pointer"
            >
              {post.title}
            </span>
            <span className="block -text--clr-light-gray-v2 text-xs">
              {formattedDate(post.date)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default RecentPost