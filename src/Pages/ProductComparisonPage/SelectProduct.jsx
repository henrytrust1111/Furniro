import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SelectProduct = ({ drowDownList }) => {
  const [data, setData] = useState(drowDownList);

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="absolute -text--clr-primary shadow-lg w-full left-0 -z-10 mt-1 bg-black"
    >
      {data?.map((e,i) => (
        <div key={i} className="cursor-pointer" >
          <p className="cursor-pointer text-base border-b -border--clr-primary">{e}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectProduct;
