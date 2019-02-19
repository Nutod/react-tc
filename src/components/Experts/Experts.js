import React from "react";
import styled from "styled-components";

const ExpertsWrapper = styled.div`
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 1.3rem;
	background: #fff;
	margin-bottom: 0.5rem;

	@media (max-width: 53em) {
		font-size: 1.1rem;
	}
`;

export default function Experts() {
	return (
		<ExpertsWrapper>
			<h3>1,231 Experts</h3>
			<p>
				<span /> 11 new
			</p>
		</ExpertsWrapper>
	);
}
