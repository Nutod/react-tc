import React, { Component } from "react";
// import { Media } from "react-breakpoints";

export default class Layout extends Component {
	render() {
		return (
			<div>
				<p>HEADER</p>
				<p>CONTENT</p>
			</div>
		);
	}
}

// <Media>
// 	{({ breakpoints, currentBreakpoint }) => {
// 		console.log(breakpoints, currentBreakpoint);
// 		if (currentBreakpoint === "mobile") {
// 			return <p>Mobile</p>;
// 		} else if (currentBreakpoint === "tablet") {
// 			return <p>Tbalet</p>;
// 		} else if (currentBreakpoint === "desktop") {
// 			return <Foo />;
// 		}
// 	}}
// </Media>
