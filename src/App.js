import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Components/Header";

const App = () => {
  return (
    <div className="container">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Helmet>

      <div className="container">
        <Header />
        <main className="right-side"></main>
      </div>
    </div>
  );
};

export default App;
