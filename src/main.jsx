import { createRoot } from "react-dom/client";
import { GifExpertApp } from "./GifExpertApp";
import { StrictMode } from "react";
import './styles.css'

createRoot(document.getElementById('root')).render(
  <>
    <GifExpertApp />
  </>,
)
