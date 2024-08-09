import React from 'react'

const NewsLetter = () => {
  return (
    <section className="py-20 -bg--clr-primary">
    <div className="container">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
          <span className="text-3xl lg:text-3xl text-white">Subscribe now to </span>
          <span className="text-[#f6dbb7] text-3xl lg:text-3xl">Our Newsletter</span> <br />
          <span className="text-3xl lg:text-3xl text-white">and get our Latest Update.</span>
        </h2>
        <p className="mb-8 text-blueGray-200">
          All your information is completely confidential
        </p>
        <div className="flex flex-wrap max-w-lg mx-auto">
          <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 -bg--clr-primary border -border--clr-primar-light rounded">
            <svg
              className="h-6 w-6 my-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <input
              className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none -bg--clr-primary outline-none"
              type="text"
              placeholder="Type your e-mail"
            />
          </div>
          <button
            className="w-full md:w-auto py-4 font-bold px-8 text-xs  -text--clr-primary  leading-none border -border--clr-primar-light-v1 hover:-border--clr-primar-light -bg--clr-primar-light hover:-bg--clr-primary rounded transition duration-300 ease-in-out hover:text-white"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewsLetter