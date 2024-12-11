import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
import Swal from "sweetalert2";

export default function App() {
  const [items, setItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  const [sortBy, setSortBy] = useState("all");
  let sortedItems;

  if (sortBy == "all") sortedItems = items;
  if (sortBy == "packed") sortedItems = items.filter((item) => item.packed);
  if (sortBy == "non") sortedItems = items.filter((item) => !item.packed);

  function handleAdd(item) {
    let newItems = [...items, item];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  }
  function deleteItem(deletedItem) {
    let old = [...items];
    let newItems = old.filter((item) => item.id != deletedItem.id);
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
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
    localStorage.setItem("items" , JSON.stringify(newItems));
    setItems(newItems);
  }
  function clear() {
    if (!items.length) {
      Swal.fire({
        title: "can not do that !",
        text: "There is no data to clear",
        icon: "question",
      });
      return;
    } else {
      Swal.fire({
        title: "Are you sure you want to clear all items ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setItems([]);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    }
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Form
          clear={clear}
          handleAdd={handleAdd}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
        <PackingList
          handleChecked={handleChecked}
          deleteItem={deleteItem}
          setItems={setItems}
          sortedItems={sortedItems}
        />
        <Stats items={items} />
      </div>
    </>
  );
}
