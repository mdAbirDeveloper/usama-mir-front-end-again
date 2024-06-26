import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
      <div className="flex">
        <div className="w-52 shadow-md p-2 min-h-screen">
          <ul>
            <li className="text-white text-lg mr-2 uppercase font-serif bg-[#615956] text-center mb-2 p-3">
              <Link href={"/Dashboard/writeBlog"}>Add Blog</Link>
            </li>
            <li className="text-white text-lg mr-2 uppercase font-serif bg-[#615956] text-center mb-2 p-3">
              <Link href={"/Dashboard/message"}>Messages</Link>
            </li>
            <li className="text-white text-lg mr-2 uppercase font-serif bg-[#615956] text-center mb-2 p-3">
              <Link href={"/Dashboard/deleteBlog"}>delete Blog</Link>
            </li>
          </ul>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
