import React, { useState } from "react";

export default function List({ item, deleteItem, handleChecked }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <li className="flex items-center justify-start border-2 p-1 border-solid border-opacity-45 border-rose-500 rounded-md">
        <input
          value={item.packed}
          onChange={() => handleChecked(item.id)}
          type="checkbox"
          name=""
          id=""
          className="accent-rose-600 size-4 me-3"
        />
        <div
          className={` p-2 ${
            item.packed ? "bg-gray-700 text-slate-300" : "bg-rose-300 text-gray-700"
          } rounded-md  items-center`}
        >
          {item.quantity} {item.desc}
          <button
            onClick={() => {
              deleteItem(item);
            }}
            className="ms-3"
          >
            ❌
          </button>
        </div>
      </li>
    </>
  );
}
