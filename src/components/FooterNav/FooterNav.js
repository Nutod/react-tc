import React from "react";
import styled from "styled-components";

const FooterNavWrapper = styled.div`
	display: flex;
	border-top: 1px solid #ccc;
	padding-top: 0.5rem;

	p {
		font-size: 1rem;
		margin-right: 1rem;
	}

	@media (max-width: 56em) {
		justify-content: center;
	}
`;

export default function FooterNav() {
	return (
		<FooterNavWrapper>
			<p>About</p>
			<p>Contact</p>
			<p>FAQs</p>
			<p>Blog</p>
			<p>Legal</p>
		</FooterNavWrapper>
	);
}
