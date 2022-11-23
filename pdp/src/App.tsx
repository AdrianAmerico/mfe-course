import { StrictMode, Suspense } from "react";
import { Footer, Header, MainLayout } from "home/components";
import { createRoot } from "react-dom/client";
// const { Header } = lazy(() => import("home/components")); //TODO - Em projeto de produção, utilizar desta forma e exportar o componente Header do projeto home como um módulo default (export default Header)
import "./index.scss";
import SafeComponent from "./SafeComponent";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Suspense fallback={<div>loading...</div>}>
        <Header />
      </Suspense>
    </SafeComponent>

    <div className="my-10">
      <MainLayout />
    </div>
    <Footer />
  </div>
);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
