import React, { useState } from "react";

export default function Form() {
  // to make controlled element like input => 3 steps => state, value, onChange
  const [desc, setdesc] = useState("");
  const [quantity, setquantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!desc) return;

    const Item = { desc, quantity, packed: false, id: Date.now() };
    console.log(Item);

    setdesc("")
    setquantity(1)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`text-center py-3 flex justify-center items-center  gap-3 text-[#E3DAFF] font-semibold text-[16px] bg-[#963D5A]`}
      >
        <span>what do you need for your trip ?</span>
        <select
          name="nums"
          value={quantity}
          onChange={(e) => setquantity(+e.target.value)}
          className="text-[#4C191B] rounded-md px-3 py-1"
        >
          {/* section 6 episode 72 */}
          {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          className="text-[#963D5A] px-3 rounded-md py-1"
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        <button className="bg-[#E3DAFF] rounded-md text-[#4C191B] px-8 py-1">
          Add
        </button>
      </form>
    </>
  );
}
