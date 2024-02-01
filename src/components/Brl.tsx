import React from "react";

const Brl = React.memo(() => {
  // Create a require context for the images directory
  const images = require.context("../images", true);

  // Function to get image path using require context
  const getFlagImagePath = () => {
    try {
      return images(`./BRL.png`).default;
    } catch (err) {
      console.error("Image loading failed", err);
      return ""; // Return a default image or an empty string as fallback
    }
  };

  return (
    <div className="h-10 w-full text-right font-medium my-1.5 cursor-pointer flex items-center">
      <div className="h-9 w-9 border border-white">
        <img src={getFlagImagePath()} alt={`BR flag`} />
      </div>
      <div className="h-10 flex flex-col justify-start p-0 pl-2 text-primaryTXT">
        <div className="text-base text-left">BRL</div>
        <div className="text-xs	text-left">Real Brasileiro</div>
      </div>
    </div>
  );
});

export default Brl;
