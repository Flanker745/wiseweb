import React from "react";
import { AiOutlinePaperClip, AiOutlinePieChart } from "react-icons/ai";

const ServiceCards = () => {
  const cards = [
    {
      icon: <AiOutlinePaperClip size={65} />,
      title: "Net Connect Plus",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page layout long established.",
      link: "#",
    },
    {
      icon: <AiOutlinePieChart size={65} />,
      title: "Data Guard Sentinel",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page layout long established.",
      link: "#",
    },
    {
      icon: <AiOutlinePaperClip size={65} />,
      title: "App Swift DevOps",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page layout long established.",
      link: "#",
    },
  ];

  return (
    <div className="lg:mt-24 text-white w-11/12 lg:w-3/4 m-auto grid md:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group bg-[rgba(26_26_26)] overflow-hidden hover:-translate-y-3 duration-300 text-xl rounded-lg shadow-md  transition-all "
        >
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center mb-4 transform transition-transform   group-hover:text-red-500 group-hover:scale-90 duration-300">
                {card.icon}
              </div>
              <h3 className="text-2xl  font-bold mb-2">{card.title}</h3>
            </div>
            <p className="text-neutral-300 mb-4">{card.description}</p>
            <a
              href={card.link}
              className="group-hover:text-red-500 text-sm duration-300 border border-[rgba(26_26_26)] group-hover:border-red-500 bg-black w-fit py-3 px-5 rounded-lg font-bold flex items-center gap-2"
            >
              READ MORE <span className="text-lg text-red-500">+</span>
            </a>
          </div>
          <div className="bg-red-500 group-hover:h-[3px] group-hover:w-full w-0 m-auto  duration-300 h-0"></div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
