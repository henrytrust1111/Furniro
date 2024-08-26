import React from 'react';
import ReuseableHero from '../../Components/ReuseableHero';
import ScrollToTop from '../../Containers/ScrollToTop';
import { FaUser, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { recentPosts } from './Blog'; 
import { useLocation } from 'react-router-dom';

const SingleBlogPost = () => {
  const location = useLocation();
  const { post } = location.state;
  console.log(post);
  
  
  return (
    <>
      <ScrollToTop />
      <ReuseableHero page={"Blog"} page1={"Blog"} />

      <div className="container mx-auto px-4 md:px-10 lg:px-28 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <img
              src={post.image}
              alt={post.title}
              className="w-full object-cover rounded-lg mb-6"
            />
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <FaUser className="mr-2 text-lg" /> Admin
              <FaCalendarAlt className="mx-4 text-lg" /> {post.date}
              <FaTag className="mx-4 text-lg" /> {post.category}
            </div>
            <h1 className="text-3xl font-semibold mb-6">{post.title}</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </div>

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
          </aside>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPost;
