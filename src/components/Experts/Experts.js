import React from "react";
import styled from "styled-components";

const ExpertsWrapper = styled.div`
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 1.3rem;
	background: #fff;
	margin-bottom: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;

	@media (max-width: 53em) {
		font-size: 1.1rem;
	}

	h3 {
		font-weight: 200;
		font-size: 2rem;

		span {
			color: blueviolet;
		}
	}

	p {
		margin-top: -1.5rem;
		position: relative;

		&::before {
			content: "";
			position: absolute;
			top: 40%;
			left: -20%;
			background: green;
			height: 0.6rem;
			width: 0.6rem;
			border-radius: 50%;
		}
	}
`;

export default function Experts() {
	return (
		<ExpertsWrapper>
			<h3>
				<span>1,231 </span>
				Experts
			</h3>
			<p>11 new</p>
		</ExpertsWrapper>
	);
}
