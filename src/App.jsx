import "./App.css";
import Counter from "./count";
import Batsman from "./batsman";
import Users from "./users";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());

function App() {
  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3, arrow function");
  };
  const num5 = (num) => {
    let number = num + 1 + 10;

    alert(number);
  };
  return (
    <>
      <section id="center">
        <div>
          <h1>Saad + React</h1>

          

          <Suspense fallback={<h3>Loading...</h3>}>
            <Users fetchUsers={fetchUsers}></Users>
          </Suspense>

          <Counter></Counter>
          <Batsman></Batsman>

          <button onClick={handleClick}>Click Me</button>
          <br />
          <button
            onClick={function handleClick2() {
              alert("clicked 2");
            }}
          >
            Click Me 2
          </button>
          <br />
          <button onClick={handleClick3}>Click Me</button>
          <br />
          <button
            onClick={() => {
              alert("clicked 4");
            }}
          >
            Click Me4
          </button>
          <br />
          <button onClick={() => num5(19)}>Add 10</button>
        </div>
      </section>
    </>
  );
}

export default App;
