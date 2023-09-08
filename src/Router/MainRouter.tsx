import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/Common/LayOut";
import HomePage from "../Pages/HomePage";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
