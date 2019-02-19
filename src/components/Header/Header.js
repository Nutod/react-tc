import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const HeaderWrapper = styled.div`
	display: flex;
	background: #444;
	padding: 1rem 4rem;
`;

export default function Header() {
	return (
		<HeaderWrapper>
			<Logo />
			<p>Navbar</p>
		</HeaderWrapper>
	);
}
