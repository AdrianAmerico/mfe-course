import { lazy, StrictMode, Suspense } from "react";
import { Footer, Header, MainLayout } from "home/components";
import { createRoot } from "react-dom/client";
// const { Header } = lazy(() => import("home/components")) //TODO - Em projeto de produção, utilizar desta forma e exportar o componente Header do projeto home como um módulo default (export default Header)
import "./index.scss";
import { ErrorBoundary } from "./components/ErrorBoundaryCustom";
import { Shop } from "shop/shop";

const App = () => {
  // console.log(localStorage.getItem("cpfCnpj"));
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <ErrorBoundary>
        <Suspense fallback={<div>loading...</div>}>
          <Header />
        </Suspense>
      </ErrorBoundary>

      <div className="my-10">
        <MainLayout />
        <Shop />
      </div>
      <Footer />
    </div>
  );
};
createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
