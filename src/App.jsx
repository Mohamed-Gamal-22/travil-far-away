import React from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import PackingList from "./components/PackingList/PackingList";
import Stats from "./components/Stats/Stats";
export default function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}
