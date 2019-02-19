import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";

const HeaderWrapper = styled.div`
	background: #444;
	padding: 0.5rem 3.5rem;
`;

export default function Header() {
	return (
		<HeaderWrapper>
			<Navigation />
		</HeaderWrapper>
	);
}
