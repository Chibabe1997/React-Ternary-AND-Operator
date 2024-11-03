import React from "react";
import Login from "./Login";

var isLoggedIn = true;
const currentTime = new Date().getHours();
console.log(currentTime);
function App() {
  return (
    <div className="container">{    
      // ternary operator  
        // currentTime > 12 ? <h1>Why are you still working?</h1> : null
        // AND Operator
        currentTime > 12 && <h1>Why are you still working?</h1>
        /* {isLoggedIn ? <h1>Hello</h1> : <Login />} */
      }
    </div>
  );
}

export default App;

// var isLoggedIn = true;
// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return (
//       <form className="form">
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     );
//   }
// }
