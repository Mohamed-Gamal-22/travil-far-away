import React, { useState } from "react";
import List from "../List/List";

export default function PackingList({ items, deleteItem, setItems, handleChecked }) {
  return (
    <div className="text-center bg-[#ECFFF8] p-3 text-[#963D5A] grow">
      <div className="container mx-auto w-[80%]">
        <ul className="flex flex-wrap md:justify-start justify-center md:gap-3 gap-1">
          {items.length > 0 ? (
            items.map((item) => <List handleChecked={handleChecked} setItems={setItems} deleteItem={deleteItem} item={item} key={item.id} />)
          ) : (
            <h1 className="text-center my-5 bg-rose-600 text-slate-300 p-3 text-xl w-full font-bold rounded-md">
              No Items To Show Yet !
            </h1>
          )}
        </ul>
      </div>
    </div>
  );
}
