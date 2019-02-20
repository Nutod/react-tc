import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/Header/Header";
import Modal from "react-responsive-modal";
import Me from "../components/Me/Me";
import Feeds from "../components/Feeds/Feeds";
import Suggestions from "../components/Suggestions/Suggestions";
import { AppContext } from "../hoc/AppContext";
import NewPost from "../components/NewPost/NewPost";

const LayoutWrapper = styled.div`
	display: grid;
	grid-template-rows: auto auto auto;
	grid-template-columns: 1fr 3fr 1fr;
	position: relative;
`;

const Button = styled.button`
	background: #127bdd;
	padding: 1rem 0.7rem;
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
	state = {
		modalOpen: false
	};

	onOpenModal = () => {
		this.setState({ modalOpen: true });
	};

	onCloseModal = () => {
		this.setState({ modalOpen: false });
	};

	render() {
		return (
			<AppContext.Provider
				value={{
					open: this.state.modalOpen,
					openModal: this.onOpenModal,
					closeModal: this.onCloseModal
				}}
			>
				<LayoutWrapper>
					<Header />
					<Button>3 New Posts</Button>
					<div>
						<Modal
							open={this.state.modalOpen}
							onClose={this.onCloseModal}
							center
						>
							<NewPost />
						</Modal>
					</div>
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
