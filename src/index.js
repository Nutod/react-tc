import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactBreakpoints from "react-breakpoints";

const breakpoints = {
	mobile: 320,
	tablet: 768,
	large: 850
};

const app = (
	<ReactBreakpoints breakpoints={breakpoints} debounceResize={true}>
		<App />
	</ReactBreakpoints>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
