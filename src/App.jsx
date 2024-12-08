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

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Form handleAdd={handleAdd} />
        <PackingList items={items} />
        <Stats />
      </div>
    </>
  );
}
