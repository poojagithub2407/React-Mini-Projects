import { useState } from "react";

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleShow = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="border my-4 mx-auto max-w-3xl px-6 py-4 bg-blue-50 rounded-md shadow">
          <button onClick={() => toggleShow(index)} className="flex justify-between items-center w-full text-left"
          >
            <span className={`font-semibold text-lg ${openIndex === index ? 'border-b border-blue-500 pb-2 w-full' : 'w-full'
              }`}>{item.question}</span>
            <span>{openIndex === index ? "-" : "+"}</span>
          </button>

          <div className=" mx-2 my-2"> {openIndex === index && item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
