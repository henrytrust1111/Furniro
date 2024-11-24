import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SelectProduct = ({ drowDownList, onProductSelect }) => {
  const [data, setData] = useState(drowDownList);
 
 useEffect(() => {
  const filteredData = data?.filter((item) => item !== null);
  setData(filteredData); 
}, []);

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
    });
  }, []);


  return (
    <div
      data-aos="fade-down"
      className="absolute -text--clr-primary shadow-lg w-full left-0 z-10 lg:-z-10 mt-1 bg-[#f9f9f9]"
    >
      {data?.map((e,i) => (
        <div key={i} className="cursor-pointer" >
          <p className="cursor-pointer text-base border-b -border--clr-primary" onClick={() => onProductSelect(e)}>{e}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectProduct;
