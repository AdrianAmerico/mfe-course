import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
export const MainLayout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />

        <Route
          path="/about"
          element={
            <div>
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </p>
              <br />
              <button>a</button>
              <br />
              <Link to="/contact">contact</Link>
            </div>
          }
        />

        <Route
          path="/contact"
          element={
            <div>
              <h1>Contact</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};
