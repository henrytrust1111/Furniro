import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SelectProduct = ({ drowDownList }) => {
  const [data, setData] = useState(drowDownList);

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);
  return (
    <div className="absolute -text--clr-primary bg-black w-full left-0">
      {data?.map((e) => (
        <ul>
          <li>{e}</li>
        </ul>
      ))}
    </div>
  );
};

export default SelectProduct;
