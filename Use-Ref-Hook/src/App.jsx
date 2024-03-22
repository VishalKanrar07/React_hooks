import React, { useState, useRef } from "react";

const App = () => {
  const [mynum, setMynum] = useState(0);
  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("heelo");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px";
  };

  const getTextBox = () => {
    console.log("world");
  };

  return (
    <>
      <input
        ref={inputOne}
        style={{ width: "100px" }}
        type="number"
        value={mynum}
        onChange={(e) => setMynum(e.target.value)}
      />
      <input type="text" value={mynum} />

      <h3>Value is: {mynum}</h3>

      <button onClick={() => getNumBox()}>Button 1</button>
      <button onClick={() => getTextBox()}>Button 2</button>
    </>
  );
};

export default App;
