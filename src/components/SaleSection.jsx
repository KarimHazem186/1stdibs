// src/components/SaleSection.jsx
import React from "react";

const saleItems = [
  {
    title: "Jewelry Sale",
    image: "https://a.1stdibscdn.com/14k-yellow-gold-turquoise-and-diamond-halo-drop-earrings-turquoise-2500-carats-for-sale/j_10563/j_266782721753150763211/j_26678272_1753150763676_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140", 
    link: "#",
  },
  {
    title: "Furniture Sale",
    image: "https://a.1stdibscdn.com/gordon-jane-martz-marshall-studios-ceramic-table-lamps-pale-yellow-glaze-for-sale/f_65472/f_463029821755406505719/f_46302982_1755406506558_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Art Sale",
    image: "https://a.1stdibscdn.com/cecil-beaton-photography-beaton-audrey-hepburn-cecil-beaton-electa-editrice-portfolios-after-for-sale/a_14652/a_153173921730248867723/IMG_7987_master.jpeg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
  {
    title: "Fashion Sale",
    image: "https://a.1stdibscdn.com/modern-artisanal-soya-linen-scarf-handwoven-in-soft-pastel-dusty-green-hue-for-sale/v_19002/v_202159721758727101285/v_20215972_1758727101946_bg_processed.jpg?disable=upscale&auto=webp&quality=60&width=140",
    link: "#",
  },
];

const SaleSection = () => {
  return (
    <section className="bg-[#f6f3ec] py-12 w-full max-w-[1440px] mx-auto">
      <div className="text-center mb-12 text-2xl tracking-widest">
        <p className="italic text-gray-700 mb-2 text-xl">Limited Time Savings</p>
        <h2 className="text-4xl font-light text-gray-900">
          Sale: <span className="font-medium">Up to 40% Off</span>
        </h2>
      </div>

<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 justify-items-center">
  {saleItems.map((item, idx) => (
    <a
      key={idx}
      href={item.link}
      className="flex flex-col md:flex-row items-center md:items-center text-center md:text-left group space-y-2 md:space-y-0 md:space-x-4"
    >
      {/* Image circle */}
      <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-16 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      {/* Title */}
      <span className="text-gray-800 group-hover:underline text-sm font-medium">
        {item.title} <span className="inline-block">›</span>
      </span>
    </a>
  ))}
</div>

    </section>
  );
};

export default SaleSection;
