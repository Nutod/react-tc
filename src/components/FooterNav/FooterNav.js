import React from "react";
import styled from "styled-components";

const FooterNavWrapper = styled.div`
	display: flex;
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
