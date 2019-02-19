import React from "react";
import styled from "styled-components";
import { Media } from "react-breakpoints";
import { Menu } from "grommet";
import { MailOption, Notification, Menu } from "grommet-icons";
import Logo from "../Logo/Logo";
import { AppContext } from "../../hoc/AppContext";
import User from "../../assets/images/user1.jpg";

const DesktopNavigationWrapper = styled.nav`
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		flex-wrap: wrap;
	}

	li {
		&:not(:last-child) {
			margin-right: 1rem;
		}
	}

	a {
		text-decoration: none;
		color: #fff;
	}

	input {
		font-family: inherit;
		width: 20vw;
		border: none;
		border-radius: 4px;
		padding: 0.4rem 0.6rem;
		background: #f5f5f5;
	}
`;

const MobileNavigationWrapper = styled.nav`
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		flex-wrap: wrap;
	}

	li {
		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;

const Image = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	margin-right: 1rem;
`;

const Button = styled.button`
	background: green;
	padding: 0.5rem 1rem;
	color: #fff;
	border: none;
	border-radius: 4px;
	font-size: 1.5rem;
	cursor: pointer;
`;

const ContainerContent = styled.div`
	display: flex;
	align-items: flex-start;
`;

const ContainerContentImage = styled.img`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1rem;
`;

const ContainerContentHeader = styled.p`
	font-size: 1rem;
`;

const ContainerContentText = styled.p`
	color: #888;
	font-size: 0.8rem;
	line-height: 1;
`;

function Message() {
	return (
		<ContainerContent>
			<ContainerContentImage src={User} alt="Yomi Adedeji" />
			<div>
				<ContainerContentHeader>Yomi Adedeji</ContainerContentHeader>
				<ContainerContentText>Managing Partner @Softcom</ContainerContentText>
			</div>
			<ContainerContentText>10mins ago</ContainerContentText>
		</ContainerContent>
	);
}

function Search() {
	return <input type="search" name="search" placeholder="Search" />;
}

function Mail() {
	return (
		<Menu
			label=""
			items={[
				{ label: <Message />, onClick: () => {} },
				{ label: <Message />, onClick: () => {} },
				{ label: <Message />, onClick: () => {} },
				{ label: <Message />, onClick: () => {} },
				{ label: <Message />, onClick: () => {} }
			]}
			icon={<MailOption size="medium" color="#fff" />}
		/>
	);
}

function Notification() {
	return (
		<Menu
			label=""
			items={[
				{ label: "First Action", onClick: () => {} },
				{ label: "Second Action", onClick: () => {} }
			]}
			icon={<Notification size="medium" color="#fff" />}
		/>
	);
}

function Profile() {
	return (
		<Menu
			label=""
			items={[
				{ label: "First Action", onClick: () => {} },
				{ label: "Second Action", onClick: () => {} }
			]}
			icon={<Image src={User} alt="User" />}
		/>
	);
}

export default function Navigation() {
	return (
		<AppContext.Consumer>
			{({ openModal }) => {
				return (
					<Media>
						{({ breakpoints, currentBreakpoint }) => {
							if (currentBreakpoint === "large") {
								return (
									<DesktopNavigationWrapper>
										<ul>
											<Logo />
											<li>
												<a href="home">Home</a>
											</li>
											<li>
												<a href="sessions">Sessions</a>
											</li>
											<li>
												<a href="topics">Topics</a>
											</li>
											<li>
												<Search />
											</li>
											<li>
												<Mail />
											</li>
											<li>
												<Notification />
											</li>
											<li>
												<Profile />
											</li>
											<li>
												<Button onClick={openModal}>New Post</Button>
											</li>
										</ul>
									</DesktopNavigationWrapper>
								);
							} else {
								return (
									<MobileNavigationWrapper>
										<ul>
											<Logo />
											<Menu
												dropAlign={{ top: "top", right: "right" }}
												items={[
													{ label: "Home", onClick: () => {} },
													{ label: "Sessions", onClick: () => {} },
													{ label: "Topics", onClick: () => {} },
													{ label: <Search />, onClick: () => {} },
													{ label: <Mail />, onClick: () => {} },
													{ label: <Notification />, onClick: () => {} },
													{ label: <Profile />, onClick: () => {} }
												]}
												icon={<Menu color="white" />}
											/>
										</ul>
									</MobileNavigationWrapper>
								);
							}
						}}
					</Media>
				);
			}}
		</AppContext.Consumer>
	);
}
