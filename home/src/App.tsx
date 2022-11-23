import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Footer, Header } from "./components";
import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Homepage content</div>
    <Footer />
  </div>
);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
