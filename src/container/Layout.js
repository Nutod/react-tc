import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Me from "../components/Me/Me";
import Feeds from "../components/Feeds/Feeds";
import Suggestions from "../components/Suggestions/Suggestions";
import { AppContext } from "../hoc/AppContext";

const LayoutWrapper = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	grid-template-columns: 1fr 3fr 1fr;
	position: relative;
`;

const Button = styled.button`
	background: blueviolet;
	padding: 0.5rem 0.7rem;
	color: #fff;
	border: none;
	border-radius: 4px;
	font-size: 1.2rem;
	width: 10rem;
	grid-column: 2 / 3;
	justify-self: center;
	margin: 1.5rem;
`;

const Content = styled.div`
	grid-column: 1 / -1;

	display: grid;
	grid-template-columns: 1fr 3fr 1.2fr;
	grid-column-gap: 2rem;
	grid-row-gap: 1rem;
	margin: 0 2rem;

	@media (max-width: 56em) {
		grid-template-columns: 1fr;
	}
`;

export default class Layout extends Component {
	render() {
		return (
			<AppContext.Provider value={{ name: "Oladotun" }}>
				<LayoutWrapper>
					<Header />
					<Button>3 New Posts</Button>
					<Content>
						<Me />
						<Feeds />
						<Suggestions />
					</Content>
				</LayoutWrapper>
			</AppContext.Provider>
		);
	}
}
