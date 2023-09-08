import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Router/MainRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={MainRoute} />
    </div>
  );
};

export default App;
