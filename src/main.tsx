import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { restoreSpaPathFromRedirect } from "./lib/site.ts";

restoreSpaPathFromRedirect();

createRoot(document.getElementById("root")!).render(<App />);
