import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const NavigationWrapper = styled.nav`
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		align-items: center;
		color: #fff;
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
		font-size: 1rem;
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

export default function Navigation() {
	return (
		<NavigationWrapper>
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
					<input type="search" name="search" placeholder="Search" />
				</li>
				<li>
					<p>Mail</p>
				</li>
				<li>
					<p>Alert</p>
				</li>
				<li>
					<p>DP</p>
				</li>
				<li>
					<button>New Post</button>
				</li>
			</ul>
		</NavigationWrapper>
	);
}
