import { createBrowserRouter } from "react-router-dom";
import Search from "./Search";
import Results from "./Results";
import App from "../App";


const Route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Search />
      },
      {
        path: 'search',
        element: <Results />
      },
      {
        path: 'images',
        element: <Results />
      },
      {
        path: 'news',
        element: <Results />
      },
      {
        path: 'videos',
        element: <Results />
      }
    ]
  }
]);

export default Route;