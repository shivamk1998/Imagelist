import React from "react";

const Imagelist = (props) => {
  console.log(props);
  const Image = props.Image.map((images) => {
    return <img src={images.webformatURL} alt="images" />;
  });
  return <div>{Image}</div>;
};

export default Imagelist;
