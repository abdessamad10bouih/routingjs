// src/App.js
import { RouterProvider } from "react-router-dom";
import router from "./middleware/Routes.jsx"; // Adjust the path if necessary

function App() {
  return <RouterProvider router={router} />;
}

export default App;
