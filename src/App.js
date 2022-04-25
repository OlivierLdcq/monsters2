import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  console.log("Rendering App Component");
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("Monsters rolodex");
  const [monsters, setMonsters] = useState([]);
  const [filterList, setFilterList] = useState(monsters);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
    console.log("Setmonster to data fetched");
  }, []);

  useEffect(() => {
    const filterListFresh = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(input);
    });
    setFilterList(filterListFresh);
    console.log("updating the filtered list");
  }, [input, monsters]);

  const onSearchChange = (e) => {
    const inputString = e.target.value.toLocaleLowerCase();
    setInput(inputString);
    console.log("changing the input");
  };
  const onTitleChange = (e) => {
    const inputString = e.target.value.toLocaleLowerCase();
    setTitle(inputString);
    console.log("changing the input");
  };

  return (
    <div className="App">
      <h1 style={{ marginTop: "0px" }}>{title}</h1>
      <SearchBox
        onChangeHanlder={onSearchChange}
        className={"search-box"}
        placeholder={"Search Robots"}
      />
      <SearchBox
        onChangeHanlder={onTitleChange}
        className={"search-box"}
        placeholder={"Type new title"}
      />
      <CardList filterList={filterList} />
    </div>
  );
};

export default App;
