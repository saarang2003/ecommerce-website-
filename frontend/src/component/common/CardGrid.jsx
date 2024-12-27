import React from 'react';
import img1 from '../../assets/image/shop/shop1.jpg'; // Ensure the image path is correct
import img2 from '../../assets/image/shop/shop2.jpg';
import img3 from '../../assets/image/shop/shop3.jpg';
import img4 from '../../assets/image/shop/shop4.jpg';
import img5 from '../../assets/image/shop/shop5.jpg';
import men1 from "../../assets/image/admin/men1.webp";
import men2 from "../../assets/image/admin/men2.webp";
import saree1 from "../../assets/image/admin/saree1.webp";
import saree2 from "../../assets/image/admin/saree2.webp";

import CardTile from './CardTile';

function CardGrid() {
  return (
    <div className="w-full p-2">
      <h1 className="font-sans text-2xl font-semibold">BEST SELLERS</h1>
      {/* Grid layout for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Rendering multiple CardTile components */}
        <CardTile img={img1} type="Nike Air MX Super 2500 - Red" price="29" oldPrice="69" />
        <CardTile img={img2} type="Puma Red Trouser " price="49" oldPrice="69" />
        <CardTile img={img3} type="Nike Air MX Super Superbowl edition" price="100" oldPrice="109" />
        <CardTile img={img4} type="Nike Air MX Super 2500 - Red" price="449" oldPrice="699" />
        <CardTile img={img5} type="Nike Air MX Super 2500 - Red" price="449" oldPrice="699" />
        <CardTile img={men1} type="Nike Air MX Super 2500 - Red" price="449" oldPrice="699" />
        <CardTile img={men2} type="Nike Air MX Super 2500 - Red" price="449" oldPrice="699" />
        <CardTile img={saree1} type="Nike Air MX Super 2500 - Red" price="449" oldPrice="699" />
        <CardTile img={saree2} type="Nike Air MX Super 2500 - Red" price="449" oldPrice="699" />
      </div>
    </div>
  );
}

export default CardGrid;
