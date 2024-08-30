import React, { useEffect, useState } from "react";
import BlogHero from "./BlogHero";
import ScrollToTop from "../../Containers/ScrollToTop";
import { FaUser, FaCalendarAlt, FaTag, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "/icons/logo.svg";
import axios from "axios";

const posts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum commodo lorem eget tincidunt. Curabitur imperdiet commodo risus sed commodo.Nullam auctor pellentesque pretium. Mauris blandit est sit amet odio tempus, sit amet viverra ipsum finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec bibendum congue ipsum quis ullamcorper. Ut risus lacus, faucibus sit amet cursus vitae, tristique id sapien.Vestibulum leo justo, mollis euismod nunc eget, feugiat vulputate enim.Suspendisse consectetur ac odio rhoncus commodo. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Curabitur egestas rhoncus ante, a lobortis velit ultrices id. Integer blandit tincidunt luctus. Nam efficitur a sapien et placerat. Ut faucibus quis nulla dignissim mollis.",
    image: "/images/blog/millennialDesign.png",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/exploring.png",
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "14 Oct 2022",
    category: "Wood",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/handmade.png",
  },
  {
    id: 4,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/millennialDesign.png",
  },
  {
    id: 5,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/exploring.png",
  },
  {
    id: 6,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/exploring.png",
  },
  {
    id: 7,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/millennialDesign.png",
  },
  {
    id: 8,
    title: "Exploring new ways of decorating",
    date: "14 Oct 2022",
    category: "Handmade",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/exploring.png",
  },
  {
    id: 9,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "/images/blog/millennialDesign.png",
  },
];

const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

export const recentPosts = [
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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [noPosts, setNoPosts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const navigate = useNavigate();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://funiro-furnitures.onrender.com/get-all-post"
      );
      toast.success(response.data.message);
      if (response.data.posts.length === 0) {
        setNoPosts(true);
      } else {
        setPosts(response.data.posts);
        console.log(response.data.posts);
        setNoPosts(false);
      }
    } catch (err) {
      setError("Network Error");
      toast.error("Network Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleRefresh = () => {
    fetchProducts();
  };

  const handlePostClick = (post) => {
    navigate(`/single-blog/${post._id}`, { state: { post } });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const formattedDate = (dateString) => {
    const date = new Date(dateString);

    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  // if (loading) {
  //   return (
  //     <section className="py-16 font-[poppins]">
  //       <div className="container mx-auto px-4 text-center -text--clr-primary flex items-center justify-center">
  //         <img src={logo} alt="" className="mr-2 animate-spin " />
  //         <p className="text-lg font-semibold">Loading...</p>
  //       </div>
  //     </section>
  //   );
  // }

  // if (error) {
  //   return (
  //     <section className="py-16 font-[poppins]">
  //       <div className="container mx-auto px-4 text-center grid place-items-center">
  //         <p className="text-lg font-semibold text-red-500">Network Error</p>
  //         <button
  //           onClick={handleRefresh}
  //           className="mt-4 -bg--clr-primar-light-v1 text--clr-primary px-4 py-2 border border--clr-primary flex items-center gap-2 hover:scale-110 font-semibold"
  //         >
  //           <BiRefresh size={20} />
  //           Refresh
  //         </button>
  //       </div>
  //     </section>
  //   );
  // }

  // if (noProducts) {
  //   return (
  //     <section className="py-16 font-[poppins]">
  //       <div className="container mx-auto px-4 text-center">
  //         <p className="text-lg font-semibold">No Products Available</p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <>
      <ScrollToTop />
      <BlogHero />
      <div className="container mx-auto md:!px-10 lg:!px-28 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4 flex flex-col gap-8">
            {currentPosts.map((post) => (
              <div key={post._id} className="bg-white overflow-hidden">
                <img
                  src={post.image.url}
                  alt={post.title}
                  className="w-full object-cover rounded-lg"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FaUser className="mr-2 text-lg" /> Admin
                    {/* <FaCalendarAlt className="mx-4 text-lg" /> {post.date} */}
                    <FaCalendarAlt className="mx-4 text-lg" /> {formattedDate(post.createdAt)}
                    <FaTag className="mx-4 text-lg" /> {post.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-500 mb-4 line-clamp-2 ">
                    {post.content}
                  </p>
                  <div onClick={() => handlePostClick(post)}>
                    <span className="text-base text-black hover:-text--clr-primary font-normal underline underline-offset-8 cursor-pointer">
                      Read more
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* {currentPosts.map((post) => (
              <div key={post.id} className="bg-white overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover rounded-lg"
                />
                <div className="p-6">
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FaUser className="mr-2 text-lg" /> Admin
                    <FaCalendarAlt className="mx-4 text-lg" /> {post.date}
                    <FaTag className="mx-4 text-lg" /> {post.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="-text--clr-light-gray-v2 mb-4">
                    {post.content}
                  </p>
                  <div className="text-base text-black font-normal underline underline-offset-8">
                    Read more
                  </div>
                </div>
              </div>
            ))} */}
            {posts.length < 4 ? null : (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className="px-4 py-2 mx-1 text-black -bg--clr-primar-light rounded hover:-bg--clr-primary hover:text-white disabled:opacity-50"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 mx-1 text-black -bg--clr-primar-light-v3 rounded hover:-bg--clr-primar-light-v1 ${
                      currentPage === index + 1
                        ? "!-bg--clr-primary text-white"
                        : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 mx-1 text-black -bg--clr-primar-light rounded hover:-bg--clr-primary hover:text-white disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
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
                  <li key={category.name} className="flex justify-between">
                    <span className="-text--clr-light-gray-v2 text-base">
                      {category.name}
                    </span>
                    <span className="-text--clr-light-gray-v2 text-base">
                      {category.count}
                    </span>
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
                      <a
                        href="#"
                        className="text-black text-sm hover:underline"
                      >
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
