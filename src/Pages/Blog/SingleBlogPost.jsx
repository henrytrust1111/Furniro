import React, { useEffect } from 'react';
import ReuseableHero from '../../Components/ReuseableHero';
import ScrollToTop from '../../Containers/ScrollToTop';
import { FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { recentPosts } from './Blog'; 
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecentPost from './RecentPost';

const SingleBlogPost = () => {
  const location = useLocation();
  const { post } = location.state;
  console.log(post);
  const formattedDate = (dateString) => {
    const date = new Date(dateString);

    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  
  
  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Blog"} page1={"Blog"} />

      <div className="container mx-auto px-4 md:px-10 lg:!px-28 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <img
              src={post.image.url}
              alt={post.title}
              className="w-full object-cover rounded-lg mb-6"
            />
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <FaUser className="mr-2 text-lg" /> Admin
              <FaCalendarAlt className="mx-4 text-lg" /> {formattedDate(post.createdAt)}
              <FaTag className="mx-4 text-lg" /> {post.category}
            </div>
            <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-6">{post.title}</h1>
            <p className="text-base -text--clr-light-gray-v1 leading-relaxed mb-8">
              {post.content}
            </p>
          </div>
{/* 
          <aside className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((recentPost, index) => (
                <li key={index} className="flex items-start">
                  <img
                    src={recentPost.image}
                    alt={recentPost.title}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <a href="#" className="text-black text-sm hover:underline">
                      {recentPost.title}
                    </a>
                    <span className="block text-gray-400 text-xs">
                      {recentPost.date}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </aside> */}
          <RecentPost />
        </div>
      </div>
    </>
  );
};

export default SingleBlogPost;
