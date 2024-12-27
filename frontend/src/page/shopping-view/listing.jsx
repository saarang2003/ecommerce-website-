import React from 'react';
import FilterSidebar from '../../component/common/Filter';
import ProductCard from '../../component/common/CardTile';

const ShopListing = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <FilterSidebar />
        
        {/* Product Grid */}
        <main className="flex-1 border-2 border-red-500">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <ProductCard key={i} index={i + 1} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ShopListing;
