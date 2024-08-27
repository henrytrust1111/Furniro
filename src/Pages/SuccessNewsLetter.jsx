import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Modal = ({children }) => {

  return (
    <div
      className=" bg-black/50 w-[100vw] h-[100vh] overflow-auto flex items-center py-[100px] justify-center p-4 lg:p-0"
      id="wrapper"
    >
      <div
        className="relative overflow-auto w-[550px] sm:w-[650px] md:w-[750px] bg-white border rounded-[14px] border-[#E1DFDF] flex items-center justify-center flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const ShowOrderModal = ({ toggle, show }) => {
  const playerRef = useRef(null);
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate("/")
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      playerRef.current?.pause();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal >
      <div className="flex  flex-col items-center justify-center py-4 md:py-9 lg:py-16 px-4 md:px-9 lg:px-20">
        <svg
          className="cursor-pointer w-5 h-5 absolute top-5 right-5 "
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          onClick={handleClick}
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
        </svg>
        <div className="h-[140px]">
          <Player
            src="https://lottie.host/930b358b-0b31-435f-aaa3-88ca57db05a4/sQ3L7s390v.json"
            className="w-[140px]"
            autoplay
            ref={playerRef}
          />
        </div>

        <div className="flex flex-col text-center justify-center items-center gap-4">
          <h1 className="text-2xl lg:text-3xl lg:leading-10 text-black font-medium">
            Subscription Confirmed!
          </h1>
          {/* <h3 className="text-[16px] leading-tight -text--clr-black-shade-v1 font-normal">
            Thank you for subscribing. You will receive updates and news directly to your email whenever there are new announcements.
          </h3> */}
          <p className="text-[12px] font-medium text-[#9CA3AF]">
            Please
            <Link
              to="/"
              className="underline underline-offset-2 cursor-pointer px-1"
            >
              click here
            </Link>
            to return to the Home page.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ShowOrderModal;
