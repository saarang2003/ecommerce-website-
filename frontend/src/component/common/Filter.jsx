import React, { useState } from 'react';
import  Checkbox  from '../../component/common/Checkbox';
import  Slider  from '../../component/common/PriceSlide';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSidebar = () => {
  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="sticky top-4 space-y-6">
        <div className="font-semibold text-lg mb-4">Filters</div>
        
        {/* Category Filter */}
        <div className="space-y-4">
          <Accordion title="Category">
            <div className="flex items-center space-x-2">
              <Checkbox id="shoes" label="Shoes" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="clothing" label="Clothing" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="accessories" label="Accessories" />
            </div>
          </Accordion>

          {/* Price Range Filter */}
          <Accordion title="Price Range">
            <Slider defaultValue={[0, 100]} max={1000} step={1} className="w-full" />
            <div className="flex justify-between text-sm">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </Accordion>

          {/* Brand Filter */}
          <Accordion title="Brand">
            <div className="flex items-center space-x-2">
              <Checkbox id="nike" label="Nike" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="adidas" label="Adidas" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="puma" label="Puma" />
            </div>
          </Accordion>

          {/* Size Filter */}
          <Accordion title="Size">
            <div className="flex items-center space-x-2">
              <Checkbox id="s" label="S" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="m" label="M" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="l" label="L" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="xl" label="XL" />
            </div>
          </Accordion>
        </div>
      </div>
    </aside>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="space-y-2">
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between cursor-pointer"
      >
        <span className="text-sm font-medium">{title}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && <div className="space-y-2 pt-1">{children}</div>}
    </div>
  );
};

export default FilterSidebar;
