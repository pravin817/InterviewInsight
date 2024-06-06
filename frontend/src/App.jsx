import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster></Toaster>
    </>
  );
}

export default App;
