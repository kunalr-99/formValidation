import React, { useState } from "react";

/* 
const App = () => {
  return (
    <>
      <h1></h1>
    </>
  );
};
*/

/*
Simple click change
const App = () => {
  const [value, setValue] = useState("Study Abroad");

  let switcher = true;
  const changeValue = () => {
    // switcher = !switcher;
    // switcher ? setValue("Study Abroad") : setValue("Stay here!");
    // console.log("clicked");
    value === "Study Abroad" ? setValue("Stay here") : setValue("Study Abroad");
  };

  return (
    <>
      <h1>{value}</h1>
      <button onClick={changeValue}>Preference</button>
    </>
  );
};
*/

const UseState = () => {
  const data = [
    {
      id: 0,
      fname: "Kunal",
      age: 22,
      desc: "Vlogging",
    },
    {
      id: 1,
      fname: "Bhavesh",
      age: 23,
      desc: "Trading",
    },
    {
      id: 2,
      fname: "Rahul",
      age: 22,
      desc: "Coding",
    },
  ];

  const [alterData, setAlterData] = useState(data);
  // const [alterName, setAlterName] = useState(data[0]);

  const changeData = () => {
    setAlterData([]);
  };

  const specificData = (id) => {
    const updatedData = alterData.filter((elem) => {
      return elem.id !== id;
    });
    setAlterData(updatedData);
  };

  // const changeName = () => {
  //   setAlterName({
  //     ...data[0],
  //     fname: "Tanmay",
  //   });
  // };

  return (
    <>
      {/* <h1>
            Name: {alterName.fname}; Age: {alterName.age}; About: {alterName.desc}
          </h1> */}
      {alterData.map((elem) => {
        return (
          <>
            <h1 key={elem.id}>
              Name: {elem.fname}; Age: {elem.age}; About: {elem.desc}
            </h1>
            <button onClick={() => specificData(elem.id)}>Clear</button>
          </>
        );
      })}
      <button onClick={changeData}>Clear</button>;
    </>
  );
};

export default UseState;
