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
import {
	FeedsWrapper,
	FeedContainer,
	FeedHeader,
	FeedHeaderContent,
	FeedContent,
	FeedReaction,
	FeedShare,
	FeedHeaderImagePlaceholder,
	Title,
	Info
} from "../styles/FeedsWrapper";

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
