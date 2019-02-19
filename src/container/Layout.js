import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const LayoutWrapper = styled.div`
	display: grid;
	grid-template-rows: auto auto;
`;

export default class Layout extends Component {
	render() {
		return (
			<LayoutWrapper>
				<Header />
				<div>
					CONTENT{" "}
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
						accusamus rerum eum hic sequi pariatur consectetur enim perspiciatis
						eos totam quisquam expedita soluta, ab est. Est optio nulla dolores
						blanditiis!
					</p>{" "}
				</div>
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
