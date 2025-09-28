import React from 'react';

const Cards = () => {
  return (
    <div className="p-4">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          
          <a
            href="/collections/fall-catalogue/furniture/seating/"
            className="group block w-full md:flex-1 border border-gray-100 rounded-lg overflow-hidden duration-300"
          >
            <div className="aspect-[16/9] relative">
              <img
                src="https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438564_1u1c8/promo_seating.jpg?disable=upscale&auto=webp&quality=60"
                alt="Spectacular Seating"
                className="w-full h-full object-cover"
                sizes="(max-width:768px) 95vw, 50vw"
                srcSet="
                  https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438564_1u1c8/promo_seating.jpg?disable=upscale&auto=webp&quality=60&width=400 400w,
                  https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438564_1u1c8/promo_seating.jpg?disable=upscale&auto=webp&quality=60&width=640 640w,
                  https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438564_1u1c8/promo_seating.jpg?disable=upscale&auto=webp&quality=60&width=800 800w
                "
              />
            </div>
            <div className="p-4">
              <h2 className="text-3xl font-serif mb-2">Spectacular Seating</h2>
              <p className="text-gray-700 mb-4">
                Discover the stunning curation of sofas, settees, lounge chairs and loveseats now.
              </p>
              <span className="text-sm underline text-gray-900 cursor-pointer">Shop Now</span>
            </div>
          </a>

          <a
            href="/designs/hermes-kelly-bag/"
            className="group block w-full md:flex-1 border border-gray-100 rounded-lg overflow-hidden duration-300"
          >
            <div className="aspect-[16/9] relative">
              <img
                src="https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438630_3f6tm/promo_kelly.jpg?disable=upscale&auto=webp&quality=60"
                alt="The Enduring Kelly Bag"
                className="w-full h-full object-cover"
                sizes="(max-width:768px) 95vw, 50vw"
                srcSet="
                  https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438630_3f6tm/promo_kelly.jpg?disable=upscale&auto=webp&quality=60&width=400 400w,
                  https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438630_3f6tm/promo_kelly.jpg?disable=upscale&auto=webp&quality=60&width=640 640w,
                  https://a.1stdibscdn.com/cms/CMS_GENERIC_IMAGE/1757438630_3f6tm/promo_kelly.jpg?disable=upscale&auto=webp&quality=60&width=800 800w
                "
              />
            </div>
            <div className="p-4">
              <h2 className="text-3xl font-serif mb-2">The Enduring Kelly Bag</h2>
              <p className="text-gray-700 mb-4">It's no surprise Grace Kelly fell in love with this iconic bag.</p>
              <span className="text-sm underline text-gray-900 cursor-pointer">Shop Now</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
