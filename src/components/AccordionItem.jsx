import React, { useRef } from "react";
import { MdKeyboardArrowDown, MdQuiz } from "react-icons/md";

const AccordionItem = ({ item, isOpen, toggle }) => {
  const contentRef = useRef(null);

  return (
    <div
      className={`overflow-hidden border border-brand/20 rounded transition-colors duration-200 ${
        isOpen ? "bg-[#eee4]" : "hover:bg-[#eee4]"
      }`}
    >
      {/* Accordion Header */}
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between py-4 px-3 focus:outline-none"
      >
        <div className="flex gap-3 items-center ">
          <MdQuiz className="text-2xl md:text-3xl border p-1 rounded-md" />
          <h2 className="text-left font-medium">{item.title}</h2>
        </div>
        <MdKeyboardArrowDown
          className={`text-2xl  transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Accordion Content */}
      <div
        ref={contentRef}
        className="ml-[52px] overflow-hidden transition-all duration-300"
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <p className="pb-4 pr-4 text-sm text-[#888]">{item.content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
