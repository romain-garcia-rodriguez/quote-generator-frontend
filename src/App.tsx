import { Route, Routes } from "react-router-dom";
import { routes } from "./router/routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, element }, index) => {
          return <Route path={path} element={element} key={index}></Route>;
        })}
      </Routes>
    </>
  );
}

export default App;
