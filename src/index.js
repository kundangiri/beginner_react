import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import First from "./components/firstcomponents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      name={"MERN"}
      address="test"
      age={5}
      marks={[20, 23, 34, 45]}
      location={{
        latitude: 27.4646546,
        longtitude: 88.4556,
      }}
      active={true}
      onSubmit={() => console.log('Submitted!!')}
    />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();