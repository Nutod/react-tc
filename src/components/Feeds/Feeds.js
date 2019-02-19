import React from "react";
import styled from "styled-components";

const FeedsWrapper = styled.div`
	@media (max-width: 53em) {
		order: -1;
	}
`;

export default function Feeds() {
	return (
		<FeedsWrapper>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit,
				doloremque molestias neque cum dolorum exercitationem, doloribus eos at
				deleniti nulla deserunt asperiores, impedit optio earum incidunt
				voluptatem assumenda fugiat.
			</div>{" "}
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, at
				quam? Reprehenderit consequatur soluta inventore corrupti, consequuntur
				ipsum facilis perferendis repellat beatae aut ipsam doloribus, excepturi
				cupiditate recusandae aperiam dignissimos.
			</div>
		</FeedsWrapper>
	);
}
