import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";

const LayoutWrapper = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	grid-template-columns: 1fr 3fr 1fr;
	position: relative;

	button {
		background: blueviolet;
		padding: 0.5rem 1rem;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 1rem;
		width: 10rem;
		grid-column: 2 / 3;
		justify-self: center;
		margin: 1.5rem;
	}
`;

const Content = styled.div`
	grid-column: 1 / -1;

	display: grid;
	grid-template-columns: 1fr 3fr 1fr;
	grid-column-gap: 5rem;
	grid-row-gap: 1rem;
	margin: 0 2rem;
`;

export default class Layout extends Component {
	render() {
		return (
			<LayoutWrapper>
				<Header />
				<button>3 New Posts</button>
				<Content>
					<div>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
						provident sed tempore assumenda quia a voluptates reprehenderit
						commodi. Facilis vero voluptatum unde, magnam laborum aperiam ex
						veniam sit non dolore!
					</div>
					<div>
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
							suscipit, doloremque molestias neque cum dolorum exercitationem,
							doloribus eos at deleniti nulla deserunt asperiores, impedit optio
							earum incidunt voluptatem assumenda fugiat.
						</div>{" "}
						<div>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
							at quam? Reprehenderit consequatur soluta inventore corrupti,
							consequuntur ipsum facilis perferendis repellat beatae aut ipsam
							doloribus, excepturi cupiditate recusandae aperiam dignissimos.
						</div>
					</div>
					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
						accusamus rerum eum hic sequi pariatur consectetur enim perspiciatis
						eos totam quisquam expedita soluta, ab est. Est optio nulla dolores
						blanditiis!
					</div>{" "}
				</Content>
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
