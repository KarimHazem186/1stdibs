import React from 'react';

const MagazineSection = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <h1 className="text-3xl italic font-serif mb-8">
        Introspective <span className="not-italic font-normal">Magazine</span>
      </h1>

      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        <div className="flex flex-col md:col-span-2">
          <img
            alt="Mid-Century Loft"
            className="shadow-md cursor-pointer object-cover w-full h-150"
            src="https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757439779_s9t2n/feature1.jpg?disable=upscale&auto=webp&quality=60&width=800"
          />
          <div className="mt-3 flex-1 flex flex-col justify-between">
            <h2 className="text-base font-medium leading-snug  tracking-widest">
              Mid-Century Treasures Shine in This Serene Loft by Damon Liss
            </h2>
            <a
              href="https://www.1stdibs.com/introspective-magazine/jam/"
              target="_blank"
              rel="noopener noreferrer"
                          className="text-gray-600 underline text-sm font-medium"
            >
              View Now
            </a>
          </div>
        </div>

        {/* Right Card (1/3 width) */}
        <div className="flex flex-col">
          <img
            alt="Rolling Hills Homestead"
            className=" shadow-md cursor-pointer object-cover w-full h-150"
            src="https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757439811_44lfa/feature2.jpg?disable=upscale&auto=webp&quality=60&width=800"
          />
          <div className="mt-3 flex-1 flex flex-col justify-between">
            <h2 className="text-base font-medium leading-snug  tracking-widest">
              In Connecticut’s Rolling Hills, JAM Crafts a Modern Version of the
              Classic Homestead
            </h2>
            <a
              href="https://www.1stdibs.com/introspective-magazine/jam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 underline text-sm font-medium mt-1"
            >
              View Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MagazineSection;
