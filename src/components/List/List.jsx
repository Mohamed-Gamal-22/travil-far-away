import React from "react";

export default function List({ item }) {
  return (
    <>
      <li className="flex items-center justify-start">
        <div className="bg-rose-300 p-2 rounded-md text-gray-700">
          {item.quantity} {item.desc}
        <button className="ms-3">❌</button>
        </div>
      </li>
    </>
  );
}
