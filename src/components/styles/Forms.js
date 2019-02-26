import styled from "styled-components";

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	label {
		color: #aaa;
		margin-top: 1.4rem;
		font-size: 1rem;
	}
`;

export const FormField = styled.input`
	width: 40vw;
	border: none;
	border-bottom: 1px solid #ccc;
	padding: 1rem 0;
	outline: none;

	@media (max-width: 40em) {
		width: 70vw;
	}
`;
