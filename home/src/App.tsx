import React from "react";
import ReactDOM from "react-dom";
import { Footer, Header } from "./components";
import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Homepage content</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
