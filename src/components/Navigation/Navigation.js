import React from "react";
import styled from "styled-components";
import { Media } from "react-breakpoints";
import { MailOption, Notification } from "grommet-icons";
import Logo from "../Logo/Logo";
import { AppContext } from "../../hoc/AppContext";
import User from "../../assets/images/user1.jpg";
import { Menu } from "grommet";

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

	button {
		background: green;
		padding: 0.5rem 1rem;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 1.5rem;
		cursor: pointer;
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

export default function Navigation() {
	return (
		<AppContext.Consumer>
			{context => {
				console.log(context);
				return (
					<Media>
						{({ breakpoints, currentBreakpoint }) => {
							console.log(breakpoints[currentBreakpoint], currentBreakpoint);
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
												<input
													type="search"
													name="search"
													placeholder="Search"
												/>
											</li>
											{/* <li>
												<Menu
													label=""
													items={[
														{ label: "First Action", onClick: () => {} },
														{ label: "Second Action", onClick: () => {} }
													]}
													icon={<MailOption />}
												/>
											</li> */}
											<li>
												<MailOption size="medium" color="#fff" />
											</li>
											<li>
												<Notification size="medium" color="#fff" />
											</li>
											<li>
												<Image src={User} alt="User" />
											</li>
											<li>
												<button>New Post</button>
											</li>
										</ul>
									</DesktopNavigationWrapper>
								);
							} else {
								return (
									<MobileNavigationWrapper>
										<ul>
											<Logo />
											<p>Menu</p>
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
