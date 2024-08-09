import React from "react";
import ScrollToTop from "../../Containers/ScrollToTop";
import AboutHero from "./AboutHero";
import NewsLetter from "./NewsLetter";
import GetInTouch from "./GetInTouch";
import CounterUp from "../../Components/elements/Counterup";

const About = () => {
  return (
    <>
      <ScrollToTop />
      <AboutHero />
      <section className="pt-6 pb-2">
        <div className="container">
          <div className="flex flex-wrap justify-between pt-8 pb-16">
            <div
              className="flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".2s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 -text--clr-primary rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div className="sm:py-2 ml-2 sm:ml-6">
                <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="text-2xl font-bold font-heading count">
                  <CounterUp count={150} time={3}  />
                </span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Exclusive Designs
                </p>
              </div>
            </div>
            <div
              className="flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".4s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 -text--clr-primary rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
              </div>
              <div className="sm:py-2 ml-2 sm:ml-6">
                <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="sm:text-2xl font-bold font-heading count">
                  <CounterUp count={58} time={3} />
                </span>
                <span className="sm:text-2xl font-bold font-heading"> k </span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Happy Customers
                </p>
              </div>
            </div>
            <div
              className="flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".6s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 -text--clr-primary rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
              </div>
              <div className="sm:py-2 ml-2 sm:ml-6">
                <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="sm:text-2xl font-bold font-heading count">
                  <CounterUp count={500} time={3} />
                </span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Unique Products
                </p>
              </div>
            </div>
            <div
              className="flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
              data-wow-delay=".8s"
            >
              <div className="flex justify-center items-center bg-blueGray-50 -text--clr-primary rounded-xl h-12 w-12 sm:h-24 sm:w-24">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <div className="sm:py-2 ml-2 sm:ml-6">
                <span className="sm:text-2xl font-bold font-heading">+ </span>
                <span className="sm:text-2xl font-bold font-heading count">
                  <CounterUp count={320} time={3} />
                </span>
                <p className="text-xs sm:text-base text-blueGray-400">
                  Tailored Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 -bg--clr-primar-light-v2" id="our-philosophy">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
            <div className="w-full lg:w-1/2">
              <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading wow animate__animated animate__fadeIn">
                Our Philosophy
              </h2>
              <p className="mb-4 text-lg text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
                At Funiro, we believe that your home should reflect your
                personality and lifestyle. That's why we curate a diverse
                collection of interior decor and furniture pieces, ensuring
                quality, uniqueness, and a touch of elegance in every item we
                offer. From cozy living spaces to sophisticated dining areas,
                our products are designed to inspire and transform your home
                into a sanctuary of comfort and style.
              </p>
            </div>
            <div className="hidden lg:flex lg:w-1/2 lg:pl-16 wow animate__animated animate__fadeIn">
              <img src="/images/aboutus/philosophy.svg" alt="Our Philosophy" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap justify-between items-center max-w-2xl lg:max-w-full mb-12">
            <div className="w-full lg:w-1/2">
              <h2 className="mb-4 text-4xl lg:text-5xl font-bold font-heading wow animate__animated animate__fadeIn">
                Why Choose Us?
              </h2>
              <p className="mb-4 text-lg text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">
                Funiro is more than just an online store. We are passionate
                about bringing you handcrafted furniture and decor that are both
                functional and beautiful. Our commitment to sustainability,
                quality, and customer satisfaction sets us apart. We work with
                skilled artisans to ensure that every product we offer is not
                only stylish but also built to last. Choose us for a shopping
                experience that is as unique as our products.
              </p>
            </div>
            <div className="hidden lg:flex lg:w-1/2 lg:pl-16 wow animate__animated animate__fadeIn">
            <img src="/images/aboutus/why.svg" alt="Why choose us" />
            </div>
          </div>
        </div>
      </section>
      <GetInTouch />
      <NewsLetter />
    </>
  );
};

export default About;









// import React from "react";
// import ScrollToTop from "../../Containers/ScrollToTop";
// import AboutHero from "./AboutHero";
// import NewsLetter from "./NewsLetter";
// import GetInTouch from "./GetInTouch";
// import CounterUp from "../../Components/elements/Counterup";

// const About = () => {
//   return (
//     <>
//       <ScrollToTop />
//       <AboutHero />
//       <section className="pt-6 pb-2">
//         <div className="container">
//           <div className="flex flex-wrap justify-between pt-8 pb-16">
//             <div
//               className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
//               data-wow-delay=".2s"
//             >
//               <div className="flex justify-center items-center bg-blueGray-50 -text--clr-primary rounded-xl h-12 w-12 sm:h-24 sm:w-24">
//                 <svg
//                   className="w-8 h-8"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                   ></path>
//                 </svg>
//               </div>
//               <div className="sm:py-2 ml-2 sm:ml-6">
//                 <span className="sm:text-2xl font-bold font-heading">+ </span>
//                 <span className="sm:text-2xl font-bold font-heading count">
//                   <CounterUp count={150} time={3} />
//                 </span>
//                 <p className="text-xs sm:text-base text-blueGray-400">
//                   Annual Partner
//                 </p>
//               </div>
//             </div>
//             <div
//               className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
//               data-wow-delay=".4s"
//             >
//               <div className="flex justify-center items-center bg-blueGray-50 -text--clr-primary rounded-xl h-12 w-12 sm:h-24 sm:w-24">
//                 <svg
//                   className="w-8 h-8"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
//                   ></path>
//                 </svg>
//               </div>
//               <div className="sm:py-2 ml-2 sm:ml-6">
//                 <span className="sm:text-2xl font-bold font-heading">+ </span>
//                 <span className="sm:text-2xl font-bold font-heading count">
//                   <CounterUp count={58} time={3} />
//                 </span>
//                 <span className="sm:text-2xl font-bold font-heading"> k </span>
//                 <p className="text-xs sm:text-base text-blueGray-400">
//                   Completed Projects
//                 </p>
//               </div>
//             </div>
//             <div
//               className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
//               data-wow-delay=".6s"
//             >
//               <div className="flex justify-center items-center bg-blueGray-50 -text--clr-primary rounded-xl h-12 w-12 sm:h-24 sm:w-24">
//                 <svg
//                   className="w-8 h-8"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
//                   ></path>
//                 </svg>
//               </div>
//               <div className="sm:py-2 ml-2 sm:ml-6">
//                 <span className="sm:text-2xl font-bold font-heading">+ </span>
//                 <span className="sm:text-2xl font-bold font-heading count">
//                   <CounterUp count={500} time={3} />
//                 </span>
//                 <p className="text-xs sm:text-base text-blueGray-400">
//                   Happy Customers
//                 </p>
//               </div>
//             </div>
//             <div
//               className="flex w-1/2 lg:w-auto py-4 wow animate__animatedanimated animate__fadeIn"
//               data-wow-delay=".8s"
//             >
//               <div className="flex justify-center items-center bg-blueGray-50 -text--clr-primary rounded-xl h-12 w-12 sm:h-24 sm:w-24">
//                 <svg
//                   className="w-8 h-8"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//                   ></path>
//                 </svg>
//               </div>
//               <div className="sm:py-2 ml-2 sm:ml-6">
//                 <span className="sm:text-2xl font-bold font-heading">+ </span>
//                 <span className="sm:text-2xl font-bold font-heading count">
//                   <CounterUp count={320} time={3} />
//                 </span>
//                 <p className="text-xs sm:text-base text-blueGray-400">
//                   Research Work
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-20 bg-blueGray-50" id="how-we-work">
//         <div className="container">
//           <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
//             <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
//               <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
//                 <span>We are </span>
//                 <span className="-text--clr-primary">awesome team </span>
//                 <br />
//                 <span>for your business dream</span>
//               </h2>
//             </div>
//             <div className="w-full lg:w-1/2">
//               <p className="text-blueGray-400 leading-loose wow animate__animatedanimated animate__fadeIn">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 luctus eget justo et iaculis. Quisque vitae nulla malesuada,
//                 auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
//                 imperdiet.
//               </p>
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 -mb-6 text-center">
//             <div
//               className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
//               data-wow-delay=".3s"
//             >
//               <div className="p-12 bg-white shadow rounded">
//                 <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
//                   1
//                 </div>
//                 <img
//                   className="h-36 mx-auto my-4"
//                   src="/assets/imgs/illustrations/eating.svg"
//                   alt="Monst"
//                 />
//                 <h3 className="mb-2 font-bold font-heading text-xl">
//                   Project Initialization
//                 </h3>
//                 <p className="text-sm text-blueGray-400 leading-relaxed">
//                   Project initiation ensures that you lay a strong foundation
//                   for a new project in your company our team.
//                 </p>
//               </div>
//             </div>
//             <div
//               className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
//               data-wow-delay=".5s"
//             >
//               <div className="p-12 bg-white shadow rounded">
//                 <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
//                   2
//                 </div>
//                 <img
//                   className="h-36 mx-auto my-4"
//                   src="/assets/imgs/illustrations/space.svg"
//                   alt="Monst"
//                 />
//                 <h3 className="mb-2 font-bold font-heading text-xl">
//                   Project planning
//                 </h3>
//                 <p className="text-sm text-blueGray-400 leading-relaxed">
//                   A project plan is essential to keep everything related to the
//                   project organized, methodical, and on track.
//                 </p>
//               </div>
//             </div>
//             <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
//               <div
//                 className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn"
//                 data-wow-delay=".7s"
//               >
//                 <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
//                   3
//                 </div>
//                 <img
//                   className="h-36 mx-auto my-4"
//                   src="/assets/imgs/illustrations/tasks.svg"
//                   alt="Monst"
//                 />
//                 <h3 className="mb-2 font-bold font-heading text-xl">
//                   Project organization
//                 </h3>
//                 <p className="text-sm text-blueGray-400 leading-relaxed">
//                   Moving forward you will be able to keep yourself and your team
//                   on track, and address challenges early.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <GetInTouch />
//       <NewsLetter />
//     </>
//   );
// };

// export default About;
