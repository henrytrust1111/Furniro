import React from 'react'
import TextEffect from "../../Components/elements/TextEffect";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative pt-24">
    <div
      className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
      style={{ zIndex: "-1" }}
    ></div>
    <div className="container">
      <div className="flex flex-wrap items-center -mx-3">
        <div className="w-full lg:w-1/2 px-3 lg:!pl-[80px]">
          <div className="py-12">
            <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
              <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                Dedicated to <span className="-text--clr-primary text-3xl lg:text-5xl"> Quality</span>,
                 and Service
              </h2>
              <div className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                We are <strong className="-text--clr-primary">Funiro</strong>, your
                Trusted{" "}
                <div className="typewrite d-inline text-brand">
                  <TextEffect text1="Furniture Store" text2="Home Decor" />
                </div>
                 partner
              </div>
              <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                Helping you transform your living spaces with style and elegance.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <Link to="/about" legacyBehavior>
                <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none -bg--clr-primary hover:-bg--clr-primary rounded wow animate__animatedanimated animate__fadeIn">
                  About Us
                </a>
              </Link>
              <Link to="/services" legacyBehavior>
                <a
                  className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  Our Services
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
          <div className="flex items-center justify-center">
            <img
              className="lg:max-w-lg"
              src="/icons/contactUs.svg"
              alt="Monst"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutHero