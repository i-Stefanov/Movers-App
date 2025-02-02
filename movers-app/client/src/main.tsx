import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("New content is available; please refresh.");
    const userWantsRefresh = window.confirm(
      "New content is available. Refresh now?"
    );
    if (userWantsRefresh) {
      window.location.reload();
    }
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
    alert("The app is ready to work offline.");
  },
});

// Check for updates periodically
setInterval(() => {
  updateSW();
}, 60 * 60 * 1000); // Check for updates every hour

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
