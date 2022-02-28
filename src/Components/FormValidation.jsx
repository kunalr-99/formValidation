import React, { useState } from "react";
import axios from "axios";

const FormValidation = () => {
  const [inputs, setInputs] = useState({
    id: 0,
    fname: "",
    email: "r",
    pass: "",
    checkPass: " ",
  });

  const [allInputs, setAllInputs] = useState([]);

  const [submitted, setSubmitted] = useState("");

  let key, value;
  const updateState = (e) => {
    e.preventDefault();
    key = e.target.name;
    value = e.target.value;
    setInputs({
      ...inputs,
      id: new Date().getTime().toString(),
      [key]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // const updatedInput = { ...inputs, id: new Date().getTime().toString() };
    const { fname, email, pass, checkPass } = inputs;
    if (fname && email && pass === checkPass) {
      setAllInputs([...allInputs, inputs]);
      await axios.post("http://localhost:5000/sign/", inputs);
      setInputs({
        ...inputs,
        fname: "",
        email: "",
        pass: "",
        checkPass: "",
      });
      setSubmitted("Thanks");
    } else {
      alert("Enter all fields");
    }
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <label htmlFor="fname">Name: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          autoComplete="off"
          value={inputs.fname}
          onChange={updateState}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="off"
          value={inputs.email}
          onChange={updateState}
        />
        <label htmlFor="pass">Pass: </label>
        <input
          type="password"
          id="pass"
          name="pass"
          autoComplete="off"
          value={inputs.pass}
          onChange={updateState}
        />
        <label htmlFor="checkPass">Pass: </label>
        <input
          type="text"
          id="checkPass"
          name="checkPass"
          autoComplete="off"
          value={inputs.checkPass}
          onChange={updateState}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{submitted}</p>
      <div>
        {allInputs.map((data) => {
          return (
            <>
              <div key={data.id}>
                <h1>Time: {data.id}</h1>
                <h1>My name is {data.fname}</h1>
                <h1>EmailID: {data.email}</h1>
                <h1>Pass: {data.pass}</h1>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FormValidation;
