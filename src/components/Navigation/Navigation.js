import React from "react";
import styled from "styled-components";
import { Media } from "react-breakpoints";
import { Menu } from "grommet";
import {
	MailOption,
	Notification,
	Menu as MenuIcon,
	User as UserIcon,
	Mail as MailIcon,
	SettingsOption,
	StatusInfo,
	Article,
	Help,
	Phone,
	DocumentText,
	Logout
} from "grommet-icons";
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

function Notifications() {
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
			dropBackground="#555"
			items={[
				{
					label: <ProfileUser label="Profile" />,
					onClick: () => {}
				},
				{
					label: <ProfileMessages label="Messages" />,
					onClick: () => {}
				},
				{
					label: <ProfileSettings label="Settings" />,
					onClick: () => {}
				},
				{
					label: <ProfileAbout label="About" />,
					onClick: () => {}
				},
				{
					label: <ProfileNews label="News" />,
					onClick: () => {}
				},
				{
					label: <ProfileFAQ label="FAQ" />,
					onClick: () => {}
				},
				{
					label: <ProfileContact label="Contact" />,
					onClick: () => {}
				},
				{
					label: <ProfileLegal label="Legal" />,
					onClick: () => {}
				},
				{
					label: <ProfileSignOut label="Sign Out" />,
					onClick: () => {}
				}
			]}
			icon={<Image src={User} alt="User" />}
		/>
	);
}

const ProfileMenuWrapper = styled.div`
	display: flex;
	align-items: center;
	color: #fff;

	& > * {
		font-size: 1.3rem;
		margin: 0 1rem;
	}

	p {
		margin-left: 1rem;
	}
`;

function ProfileUser({ label }) {
	return (
		<ProfileMenuWrapper>
			<UserIcon size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileMessages({ label }) {
	return (
		<ProfileMenuWrapper>
			<MailIcon size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileNotification({ label }) {
	return (
		<ProfileMenuWrapper>
			<Notification size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileSettings({ label }) {
	return (
		<ProfileMenuWrapper border>
			<SettingsOption size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileAbout({ label }) {
	return (
		<ProfileMenuWrapper>
			<StatusInfo size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileNews({ label }) {
	return (
		<ProfileMenuWrapper>
			<Article size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileFAQ({ label }) {
	return (
		<ProfileMenuWrapper>
			<Help size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileContact({ label }) {
	return (
		<ProfileMenuWrapper>
			<Phone size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileLegal({ label }) {
	return (
		<ProfileMenuWrapper>
			<DocumentText size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
	);
}

function ProfileSignOut({ label }) {
	return (
		<ProfileMenuWrapper>
			<Logout size="small" color="#fff" />
			<p>{label}</p>
		</ProfileMenuWrapper>
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
												<Notifications />
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
												justifyContent="center"
												dropAlign={{ top: "top", right: "right" }}
												items={[
													{ label: "Home", onClick: () => {} },
													{ label: "Sessions", onClick: () => {} },
													{ label: "Topics", onClick: () => {} },
													{ label: <Search />, onClick: () => {} },
													{ label: "Messages", onClick: () => {} },
													{ label: "Notifications", onClick: () => {} },
													{
														label: <Image src={User} alt="User" />,
														onClick: () => {}
													},
													{
														label: (
															<Button onClick={openModal}>New Post</Button>
														),
														onClick: () => {}
													}
												]}
												icon={<MenuIcon color="white" />}
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
