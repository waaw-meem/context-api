import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
import "./index.css"

import { Provider } from "./context/book.js";
// import BookStore from "./context/book.js";

const el = document.getElementById('root')

const root = ReactDOM.createRoot(el)

root.render(
<Provider>
    <App/>
</Provider>
)