import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactBreakpoints from "react-breakpoints";

const breakpoints = {
	mobile: 320,
	mobileLandscape: 480,
	tablet: 768,
	tabletLandscape: 1024,
	desktop: 1200,
	desktopLarge: 1500,
	desktopWide: 1920
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
