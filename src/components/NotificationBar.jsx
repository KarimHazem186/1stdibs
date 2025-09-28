import React from 'react';

const NotificationBar = () => {
  return (
    <header className="w-full">
      <div className="bg-black text-white py-2 px-4 text-xs flex flex-row justify-center items-center gap-1 overflow-x-auto whitespace-nowrap">
        <span>
          Information on Paying Duties, Tariffs & Customs Fees on International Orders
        </span>
        <button className="underline hover:no-underline hover:opacity-80 cursor-pointer transition-opacity duration-200">
          Learn More
        </button>
      </div>
    </header>
  );
};

export default NotificationBar;
