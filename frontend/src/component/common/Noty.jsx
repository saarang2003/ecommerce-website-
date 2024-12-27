import React from "react";

const notyIconStyle = {
  position: "relative",
  display: "inline-block",  // Use 'inline-block' for better alignment with text
};

const notyNumStyle = {
  position: "absolute",
  top: "-5px",  // Adjusting the position to be more above the icon
  right: "-5px",  // Slightly adjust the position for better spacing
  backgroundColor: "rgb(29, 161, 242)",  // Bright blue background for the badge
  fontSize: "10px",  // Slightly larger font for better readability
  color: "white",
  padding: "5px 5px",  // Increase padding for a bigger, more noticeable badge
  borderRadius: "50%",  // Circular shape
  minWidth: "20px",  // Ensure the badge is large enough even with small numbers
  height: "16px",  // Ensure it's round with equal width and height
  display: "flex",  // Use flexbox for centering the number
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",  // Make the number bold for better visibility
};


export default function Noty({ width, color, count }) {
  return (
    <div>
      <div style={notyIconStyle}>
        {count > 0 ? <div style={notyNumStyle}>{count}</div> : null}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}  // Dynamically set the width from the prop
          height={width} // Dynamically set the height from the prop
          viewBox="0 0 24 24"
          fill="none"
          stroke={color} // Dynamically set the color from the prop
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shopping-cart" // Use className instead of class
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      </div>
    </div>
  );
}
