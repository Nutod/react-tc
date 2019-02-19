import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
	background: green;
	color: #fff;
	font-size: 2rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 0.8rem 1rem;
	border-radius: 3px;

	span {
		font-size: 1.8rem;
	}
`;

export default function Logo() {
	return (
		<LogoWrapper>
			T<span>C</span>
		</LogoWrapper>
	);
}
