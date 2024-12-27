import React from 'react';
import Carousel from '../../component/common/Slider';
import Footer from '../../component/shop/Footer';
import Card from '../../component/shop/Card';
import img1 from '../../assets/image/img1.jpg';
import img2 from '../../assets/image/img2.jpg';
import img3 from '../../assets/image/img3.jpg';
import CardGrid from '../../component/common/CardGrid';
import { ArrowRight } from 'lucide-react';


function ShopHome() {
  return (
    <div className='w-full h-auto'> {/* Use w-full instead of w-screen */}
      <Carousel />
      <div className='flex flex-col'>
      <div className='w-full h-[370px]   flex justify-center items-center gap-x-5'>
      <Card img={img1} type="Watches" price="99"/>
      <Card img={img2} type="Plo Bag" price="79.99"/>
      <Card img={img3} type="Sunglass" price= "29.00"/>
      </div>
      <div className="flex items-center justify-center gap-4 w-full max-w-4xl mx-auto px-4">
      <div className="h-px  bg-black flex-1" />
      <div className="flex justify-center">
  <a href='/shop/listing' className="flex items-center text-base text-red-600 font-medium">
    View All Products
    <span className="inline-block ml-2">
      <ArrowRight width="30" height="20" />
    </span>
  </a>
</div>

      <div className="h-px bg-black flex-1" />
    </div>
      </div>
      
      <div className='w-full h-auto  p-7  ' >
        <CardGrid/>
      </div>
      <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <span className="text-3xl text-black mb-2">
            <i className="fas fa-paper-plane"></i> {/* Replace with an actual icon */}
          </span>
          <h3 className="font-bold text-black">FREE SHIPPING, RETURN</h3>
          <p className="text-red-500">Free Shipping On All US Orders</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <span className="text-3xl text-black mb-2">
            <i className="fas fa-dollar-sign"></i> {/* Replace with an actual icon */}
          </span>
          <h3 className="font-bold text-black">RETURN POLICY</h3>
          <p className="text-red-500">30 Days Return Back</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <span className="text-3xl text-black mb-2">
            <i className="fas fa-star"></i> {/* Replace with an actual icon */}
          </span>
          <h3 className="font-bold text-black">SECURE PAYMENTS</h3>
          <p className="text-red-500">All Payment Are Secured And Trusted</p>
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-center">
          <span className="text-3xl text-black mb-2">
            <i className="fas fa-comment"></i> {/* Replace with an actual icon */}
          </span>
          <h3 className="font-bold text-black">1-800-333-44-55</h3>
          <p className="text-red-500">Hourly Time Slots For Deliveries</p>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
}

export default ShopHome;
