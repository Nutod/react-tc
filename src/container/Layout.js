import React, { Component } from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
	display: grid;
	grid-template-rows: 3rem auto;
`;

export default class Layout extends Component {
	render() {
		return (
			<LayoutWrapper>
				<div>HEADER</div>
				<div>CONTENT</div>
			</LayoutWrapper>
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
