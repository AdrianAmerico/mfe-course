import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
export const MainLayout = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>home</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <br />

              <br />
              <Link to="/contact" style={{ backgroundColor: "red" }}>
                Página de contatos
              </Link>
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div>
              <h1>Página de contatos</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                dolor vitae eius fuga nobis, ratione facilis culpa saepe impedit
                veritatis voluptate soluta ipsa corrupti. Delectus cumque
                adipisci nam nihil neque!
              </p>
              <br />
              <Link to=".." style={{ backgroundColor: "red" }}>
                Voltar
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};
