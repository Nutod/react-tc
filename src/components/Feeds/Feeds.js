import React from "react";
import styled from "styled-components";

const FeedsWrapper = styled.div`
	@media (max-width: 56em) {
		order: -1;
	}
`;

const FeedContainer = styled.div``;

const FeedHeader = styled.div``;

const FeedContent = styled.div`
	p {
		font-size: 1rem;
	}
`;

const FeedReaction = styled.div``;

export default function Feeds() {
	return (
		<FeedsWrapper>
			<FeedContainer>
				<FeedHeader>HEADER</FeedHeader>
				<FeedContent>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
						ipsam eum qui ea, error eveniet eligendi nobis inventore laudantium
						natus molestias exercitationem! Expedita earum soluta animi esse
						aliquid recusandae praesentium.
					</p>
				</FeedContent>
				<FeedReaction>REACTION</FeedReaction>
			</FeedContainer>
		</FeedsWrapper>
	);
}
