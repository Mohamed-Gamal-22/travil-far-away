import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAdd(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItem(deletedItem) {
    let old = [...items];
    let newItems = old.filter((item) => item.id != deletedItem.id);
    setItems(newItems);
  }
  function handleChecked(id) {
    let old = [...items];
    let newItems = [];
    for (const item of old) {
      if (item.id == id) {
        item.packed = !item.packed;
        newItems.push(item);
      } else {
        newItems.push(item);
      }
    }
    setItems(newItems);
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Form handleAdd={handleAdd} />
        <PackingList
          handleChecked={handleChecked}
          items={items}
          deleteItem={deleteItem}
          setItems={setItems}
        />
        <Stats />
      </div>
    </>
  );
}
