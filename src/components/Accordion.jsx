import React, { useState } from "react";
import { items } from "../data/items";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  // State for selected category (default: "Account")
  const [selectedCategory, setSelectedCategory] = useState("Account");

  // Available categories for filtering
  const categories = ["Account", "Shipping", "Orders", "Support"];

  // Filter items based on selected category
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  // State for tracking which accordion item is open
  const [openId, setOpenId] = useState(null);

  // Toggles accordion item: closes if already open, opens otherwise
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="px-4 md:max-w-[600px] py-16">
      {/* Header Section */}
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-center md:text-4xl font-medium w-80 md:w-full ">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-center text-[#666] md:w-[400px] mt-4 md:mt-4">
          Find answers to the most commonly asked questions about our services,
          policies, and procedures.
        </p>
      </div>

      {/* Category Selection Buttons */}
      <div className="mt-8 flex justify-center flex-wrap gap-2 md:gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`border-2 border-[#666] py-1 px-3 rounded-full text-sm transition-colors duration-200 
              ${
                category === selectedCategory
                  ? "bg-[#444] text-white"
                  : "hover:bg-[#444] hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordion Items List */}
    </div>
  );
};
export default Accordion;
