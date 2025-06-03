import React from "react";

const Sidenav = () => {
  return (
    <div className="w-[18%] h-screen bg-red-100 px-[1.2rem] py-[1.2rem]">
      <div className="w-full flex flex-col items-center gap-[1.2rem] ">
        <h1 className="p-2 rounded-md border-2 border-blue-200 text-center text-blue-300 font-light w-fit">
          Add new product
        </h1>
        <hr className="w-full text-gray-400" />
      </div>

      <div className="p-3 flex flex-col gap-[1rem]">
        <h1 className="text-[1.2rem]">Category Filter</h1>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-amber-200 rounded-full"></div>
            <h1>Cat-1</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-200 rounded-full"></div>
            <h1>Cat-2</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-pink-200 rounded-full"></div>
            <h1>Cat-3</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
