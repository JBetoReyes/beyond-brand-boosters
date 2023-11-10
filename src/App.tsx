import { RouterProvider } from '@tanstack/react-router'
import { router } from "./Router";
import "./sass/main.scss";

function App() {
  return <RouterProvider router={router} />
    ;
}

export default App
