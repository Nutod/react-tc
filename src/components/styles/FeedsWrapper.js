import styled from "styled-components";

export const FeedsWrapper = styled.div`
	@media (max-width: 56em) {
		order: -1;
	}
`;

export const FeedContainer = styled.div`
	border: 1px solid #ccc;
	display: flex;
	flex-direction: column;
	border-radius: 3px;
	font-size: 1.3rem;
	background: #fff;
	padding: 1rem;
	margin-bottom: 0.5rem;

	@media (max-width: 53em) {
		font-size: 1.1rem;
	}
`;

export const FeedHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const FeedHeaderContent = styled.div`
	display: flex;
`;

export const FeedHeaderImage = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	margin-right: 1rem;
`;

export const Title = styled.p`
	font-weight: 400;
	font-size: 1.4rem;

	span {
		color: #bbb;
		font-size: 1.2rem;
		margin-left: 1rem;
	}
`;

export const FeedHeaderImagePlaceholder = styled.div`
	background: green;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	margin-right: 1rem;
`;

export const FeedContent = styled.div`
	margin-top: 1rem;

	p {
		font-size: 1.4rem;
		line-height: 1.4;

		@media (max-width: 53em) {
			font-size: 1.2rem;
		}
	}
`;

export const FeedReaction = styled.div`
	color: green;
	display: flex;
	margin-top: 1.5rem;

	& > * {
		margin-right: 1rem;
	}
`;

export const FeedShare = styled.div`
	border-bottom: 1px solid #ccc;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	padding-bottom: 1rem;

	& > * {
		margin-left: 1rem;
	}
`;

export const Info = styled.p`
	line-height: 1.2;
	color: #bbb;
`;

export const Comment = styled.p`
	align-self: flex-end;
	text-transform: uppercase;
	font-weight: 500;
	padding-top: 1rem;
`;
