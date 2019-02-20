import React from "react";
import styled from "styled-components";
import {
	More,
	Facebook,
	Twitter,
	Linkedin,
	Like,
	View,
	Chat
} from "grommet-icons";
import User from "../../assets/images/user1.jpg";

const FeedsWrapper = styled.div`
	@media (max-width: 56em) {
		order: -1;
	}
`;

const FeedContainer = styled.div`
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

const FeedHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const FeedHeaderContent = styled.div`
	display: flex;
`;

const FeedHeaderImage = styled.img`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	margin-right: 1rem;
`;

const Title = styled.p`
	font-weight: 400;
	font-size: 1.4rem;

	span {
		color: #bbb;
		font-size: 1.2rem;
		margin-left: 1rem;
	}
`;

const FeedHeaderImagePlaceholder = styled.div`
	background: green;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	margin-right: 1rem;
`;

const FeedContent = styled.div`
	margin-top: 1rem;

	p {
		font-size: 1.4rem;
		line-height: 1.4;

		@media (max-width: 53em) {
			font-size: 1.2rem;
		}
	}
`;

const FeedReaction = styled.div`
	color: green;
	display: flex;
	margin-top: 1.5rem;

	& > * {
		margin-right: 1rem;
	}
`;

const FeedShare = styled.div`
	border-bottom: 1px solid #ccc;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	padding-bottom: 1rem;

	& > * {
		margin-left: 1rem;
	}
`;

const Info = styled.p`
	line-height: 1.2;
	color: #bbb;
`;

const Comment = styled.p`
	align-self: flex-end;
	text-transform: uppercase;
	font-weight: 500;
	padding-top: 1rem;
`;

export default function Feeds() {
	return (
		<FeedsWrapper>
			<FeedContainer>
				<FeedHeader>
					<FeedHeaderContent>
						<FeedHeaderImagePlaceholder />
						<div>
							<Title>New DM Feature</Title>
							<Info>Sept 20, 12:31pm</Info>
						</div>
					</FeedHeaderContent>
					<More size="medium" />
				</FeedHeader>
				<FeedContent>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
						ipsam eum qui ea, error eveniet eligendi nobis inventore laudantium
						natus molestias exercitationem! Expedita earum soluta animi esse
						aliquid recusandae praesentium.
					</p>
				</FeedContent>
				<FeedReaction>
					<Like size="medium" />
				</FeedReaction>
			</FeedContainer>
			<FeedContainer>
				<FeedHeader>
					<FeedHeaderContent>
						<FeedHeaderImage src={User} />
						<div>
							<Title>
								Yele Bademosi <span>Jan 2, 8:31pm</span>
							</Title>
							<Info>Angel Investor @Microtraction</Info>
						</div>
					</FeedHeaderContent>
					<More size="medium" />
				</FeedHeader>
				<FeedContent>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
						ipsam eum qui ea, error eveniet eligendi nobis inventore laudantium
						natus molestias exercitationem! Expedita earum soluta animi esse
						aliquid recusandae praesentium.
					</p>
				</FeedContent>
				<FeedReaction>
					<Like size="medium" />
					<View size="medium" />
					<Chat size="medium" />
				</FeedReaction>
				<FeedShare>
					<Twitter size="medium" />
					<Facebook size="medium" />
					<Linkedin size="medium" />
				</FeedShare>
				<Comment>Add Comment</Comment>
			</FeedContainer>
		</FeedsWrapper>
	);
}
