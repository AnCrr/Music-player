// import { Routes, Route } from "react-router-dom";
import React from "react";
import axios from "axios";
import Test from "./components/Test";
import Home from "./components/Home";
import MainLayout from "./layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
const clientId =
  "BQCT4897GULkP-UhMRlLOy-htYDSOdP90OcppEBcbTyCphNOee0LQjK2TBag1UMMqNOrIGH83KqBmKd7vf4qZnYHRYRDjCtQLsKTOUagbZgFd1f6GXcgFLPM5GuU1KYopk2tFvjlE7aNk_bZEajEpK1xaqdGnBotbU0CjWRzIEeiNtutUdvBJowwD_vlW0Gj8ZF9PbXfNXfBEblbho_vpSuZaeRh";
const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization: `Bearer ${clientId}`,
  },
});

const App = () => {
  // spotify
  // .get("/me")
  // .then((response) => {
  //   console.log(response.data);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <MainLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        {/* </BrowserRouter> */}
      </MainLayout>
    </div>
  );
};

export default App;

//TODO: try aliases
