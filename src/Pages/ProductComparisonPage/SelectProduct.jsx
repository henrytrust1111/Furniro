import React, { useState } from "react";

const SelectProduct = ({ drowDownList }) => {
  console.log(drowDownList);
  const [data, setData] = useState(drowDownList);

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
