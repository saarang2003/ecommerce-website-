import React, { useState } from "react";
import { ChevronDown } from 'lucide-react';

const navigation = [
  {
    title: "Clothes",
    href: "#",
    items: [
      { title: "Men", href: "#" },
      { title: "Women", href: "#" },
      { title: "Kids", href: "#" },
      { title: "New Arrivals", href: "#" },
    ],
  },
  {
    title: "Electronics",
    href: "#",
    items: [
      { title: "Cooking", href: "#" },
      { title: "Kitchen", href: "#" },
      { title: "Appliances", href: "#" },
      { title: "Gadgets", href: "#" },
    ],
  },
  {
    title: "Trends",
    href: "#",
    items: [
      { title: "Seasonal", href: "#" },
      { title: "All Time", href: "#" },
      { title: "Old Money", href: "#" },
      { title: "New Collections", href: "#" },
    ],
  },
];

function MainNav() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="border-b border-2 border-none bg-black text-white ">
      <div className="flex h-16 items-center px-4 border-2 border-none  border-black">
        <div className="flex gap-x-6 text-sm border-2 border-none  border-green-300">
          <a href="/" className="transition-colors hover:text-primary border-2 border-none  border-red-800">
            Home
          </a>
          {navigation.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 transition-colors  hover:text-primary">
                {item.title}
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === item.title && (
                <div className="absolute left-0 top-full z-50 mt-2 w-64 bg-white text-gray-900 rounded-md border-1  p-2 shadow-lg">
                  <div className="grid grid-cols-1 gap-2">
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        className="block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="/about" className="transition-colors hover:text-primary">
            About
          </a>
          <a href="/contact" className="transition-colors hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
