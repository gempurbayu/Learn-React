import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

ReactDOM.render(
    //strictmode untuk memberi warning jika ada kesalahan
    <React.StrictMode>
    <App />
    </React.StrictMode>,
    document.getElementById("root")
)