import React, { useState } from "react";
import List from "../List/List";

export default function PackingList() {
  const [items, setitems] = useState([
    { id: 1, desc: "Passports", quantity: 2, packed: false },
    { id: 2, desc: "Socks", quantity: 12, packed: true },
    { id: 3, desc: "Charger", quantity: 1, packed: false },
  ]);

  return (
    <div className="text-center bg-[#ECFFF8] p-3 text-[#963D5A] grow">
      <div className="container mx-auto w-[80%]">
        <ul className="flex flex-wrap justify-start">
          {items.map((item)=> <List item={item} key={item.id}/>)}
        </ul>
      </div>
    </div>
  );
}
