import React from "react";
import { fetchAccessToken } from "./Home";

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: "Ani" };
//   }

//   getData() {
//     return {
//       toDo: () => {},
//       name: "Ani",
//     };
//   }

//   render(): React.ReactNode {
//     return <div></div>;
//   }
// }

const Test = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  if (code) {
    const res = fetchAccessToken(code).then((item) =>
      console.log("item", item)
    );
  } else {
    console.log("code", code);
  }

  return <div>TEST</div>;
};

export default Test;
