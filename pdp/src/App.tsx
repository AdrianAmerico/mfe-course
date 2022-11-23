import { StrictMode, Suspense } from "react";
import { Header } from "home/components";
import { createRoot } from "react-dom/client";
// const { Header } = lazy(() => import("home/components")); //TODO - Em projeto de produção, utilizar desta forma e exportar o componente Header do projeto home como um módulo default (export default Header)
import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<div>loading...</div>}>
      <Header />
    </Suspense>
  </div>
);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
