import React, { Component } from "react";
import { Media } from "react-breakpoints";
import Foo from "./foo";

export default class Layout extends Component {
	render() {
		return (
			<div>
				<Media>
					{({ breakpoints, currentBreakpoint }) => {
						console.log(breakpoints, currentBreakpoint);
						if (currentBreakpoint === "mobile") {
							return <p>Mobile</p>;
						} else if (currentBreakpoint === "tablet") {
							return <p>Tbalet</p>;
						} else if (currentBreakpoint === "desktop") {
							return <Foo />;
						}
					}}
				</Media>
			</div>
		);
	}
}
