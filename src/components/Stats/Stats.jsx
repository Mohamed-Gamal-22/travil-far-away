import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="text-center font-semibold bg-[#4C191B] p-3 text-[#ECFFF8]">
        Start adding some items to your packing list 😎
      </footer>
    );
  }

  const numberOfItems = items.length;
  const packedNumber = items.filter((item) => item.packed).length;

  return (
    <footer className="text-center font-semibold bg-[#4C191B] p-3 text-[#ECFFF8]">
      {Math.round((packedNumber / numberOfItems) * 100) == 100
        ? "You Ready To Travil ✈️ have a nice trip"
        : `You have ${numberOfItems} items on your list, and your already packed
      ${packedNumber} item (
      ${Math.round((packedNumber / numberOfItems) * 100)} %)`}
    </footer>
  );
}
