import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const HeaderWrapper = styled.div`
	background: #444;
	padding: 0.2rem 2rem;
	grid-column: 1 / -1;
`;

export default function Header() {
	return (
		<HeaderWrapper>
			<Navigation />
		</HeaderWrapper>
	);
}
