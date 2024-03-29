import { useEffect, useState } from "react";

const Main = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect1 Ran");
  }, []);
  useEffect(() => {
    console.log("UseEffect2 Ran");
    if (toggleTwo)
      console.log("toggleTwo slice of state is true so thise code runs");
  }, [toggleTwo]);
  useEffect(() => {
    myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running`);
    }, 1000);
    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`
      );
      clearInterval(myInterval);
    };
  }, [count]);
  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>Main Component</h1>
      <button onClick={() => setToggleOne(!toggleOne)}>Toggle One</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>Toggle Two</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default Main;
