import "styles/reset.css"
import "styles/_global.scss"

import { createRoot } from "react-dom/client"
import App from "./App"
import React from "react"

const resume = document.getElementById("resume")
if (!resume) throw new Error("Failed to find the root element")

createRoot(resume).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// reportWebVitals()
