import React from 'react';

function Card({ img  , type , price}) {
  return (
    <div className="relative w-[400px] h-[250px] border-1 border-grey rounded-xl shadow-lg group mx-3">
      <img src={img} alt="img1" className="w-full h-full object-cover z-50  group-hover:scale-105 transition-transform duration-300 " />
      
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2 w-[140px] h-[132px]  flex flex-col justify-center items-center mx-2  p-2">
        <h3 className="text-[25px] text-amber-900 font-sans text-left font-bold">{type}</h3>
        <p className="text-xs text-gray-600">Starting at ${price}</p>
      </div>
    </div>
  );
}

export default Card;
