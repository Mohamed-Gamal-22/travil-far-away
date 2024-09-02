import React from "react";

export default function List({ item }) {
  return (
    <>
      <li className="w-1/6 flex items-center justify-start gap-2 my-5 ">
        <span className={item.packed ? "line-through" : ""}>
          {item.quantity} {item.desc}
        </span>
        <button>❌</button>
      </li>
    </>
  );
}
