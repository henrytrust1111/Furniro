import React from "react";
import BlogHero from "./BlogHero";
import ScrollToTop from "../../Containers/ScrollToTop";
import { FaUser, FaCalendarAlt, FaTag, FaSearch } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/millennialDesign.png",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/exploring.png",
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    category: "Wood",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/handmade.png",
  },
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

const recentPosts = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    image: "/images/blog/millennial2.png",
  },
  {
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    image: "/images/blog/exploring2.png",
  },
  {
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    image: "/images/blog/handmade2.png",
  },
  {
    title: "Modern home in Milan",
    date: "03 Aug 2022",
    image: "/images/blog/modernHome.png",
  },
  {
    title: "Colorful office redesign",
    date: "03 Aug 2022",
    image: "/images/blog/colorfulOffice.png",
  },
];

const Blog = () => {
  return (
    <>
      <ScrollToTop />
      <BlogHero />
      <div className="container mx-auto md:!px-10 lg:!px-28 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 flex flex-col gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full  object-cover rounded-lg"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FaUser className="mr-2 text-lg" /> Admin
                    <FaCalendarAlt className="mx-4 text-lg" /> {post.date}
                    <FaTag className="mx-4 text-lg" /> {post.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="-text--clr-light-gray-v2 mb-4">{post.excerpt}</p>
                  <div className="text-base text-black font-normal underline underline-offset-8">
                    Read more
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-8">
              <button className="px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                1
              </button>
              <button className="px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                2
              </button>
              <button className="px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                3
              </button>
              <button className="px-4 py-2 mx-1 text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
                Next
              </button>
            </div>
          </div>
          <aside className="lg:w-1/4">
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li
                    key={category.name}
                    className="flex justify-between"
                  >
                    <span className="-text--clr-light-gray-v2 text-base">{category.name}</span>
                    <span className="-text--clr-light-gray-v2 text-base">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((post, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <a href="#" className="text-black text-sm hover:underline">
                        {post.title}
                      </a>
                      <span className="block -text--clr-light-gray-v2 text-xs">
                        {post.date}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Blog;
