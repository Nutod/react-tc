import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const HeaderWrapper = styled.div`
	display: flex;
	background: #444;
	padding: 0.5rem 3.5rem;
	justify-content: space-between;
	align-items: center;
`;

export default function Header() {
	return (
		<HeaderWrapper>
			<Logo />
			<p>Navbar</p>
		</HeaderWrapper>
	);
}
