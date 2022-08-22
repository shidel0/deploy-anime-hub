import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HomeContextProvider from "./ContextProvider/HomeContextProvider";
import MainRouter from "./MainRouter";

const App = () => {
  return (
    <HomeContextProvider>
      <NavBar />
      <MainRouter />
    </HomeContextProvider>
  );
};

export default App;
