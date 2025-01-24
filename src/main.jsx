import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { register } from "swiper/element/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import App from "./App.jsx";

register();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
