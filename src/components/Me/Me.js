import React from "react";
import styled from "styled-components";

const MeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #ccc;
	border-radius: 3px;
`;

export default function Me() {
	return (
		<MeWrapper>
			<p>ME</p>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde provident
				sed tempore assumenda quia a voluptates reprehenderit commodi. Facilis
				vero voluptatum unde, magnam laborum aperiam ex veniam sit non dolore!
			</p>
		</MeWrapper>
	);
}
