import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
	background: green;
	font-size: 1.2rem;

	span {
		font-size: 1rem;
	}
`;

export default function Logo() {
	return (
		<LogoWrapper>
			T<span>C</span>
		</LogoWrapper>
	);
}
