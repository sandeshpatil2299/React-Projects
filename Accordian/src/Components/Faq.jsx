import React, { useState } from "react";

function Faq(props) {
  const icons = [
    "https://img.icons8.com/ios/28/ffffff/plus-math--v1.png",
    "https://img.icons8.com/ios-filled/28/ffffff/multiply.png",
  ];
  return (
    <div className="w-2/3 mx-auto mb-5">
      <div>
        <button
          onClick={props.onClick}
          className="bg-[#2c2c2c] w-full text-left text-xl p-3 flex justify-between hover:bg-[#4e4e4e] hover:border-b-blue-300 hover:border-b-2">
          <h3>{props.title}</h3>
          <img src={props.show ? icons[1] : icons[0]}></img>
        </button>
        {props.show && (
          <p className="bg-[#2c2c2c] w-full text-left text-xl p-3 mt-1 hover:bg-[#4e4e4e]">
            {props.content}
          </p>
        )}
      </div>
    </div>
  );
}

export default Faq;
