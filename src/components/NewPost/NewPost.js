import React from "react";
import { Tabs, Tab, Box } from "grommet";

export default function NewPost() {
	return (
		<Tabs justify="start">
			<Tab title="QUESTIONS" color="yellow">
				<Box pad="medium">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					vitae, commodi reprehenderit aliquam, laboriosam nulla animi
					doloremque, necessitatibus odio consequatur quas. Sint inventore
					dolorem mollitia, odio recusandae quibusdam assumenda magnam.
				</Box>
			</Tab>
			<Tab title="INSIGHTS">
				<Box pad="medium">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
					incidunt! Beatae vitae suscipit est, ratione officiis tenetur culpa ad
					magnam quis pariatur autem in maiores maxime accusamus? Cupiditate,
					corporis soluta!
				</Box>
			</Tab>
		</Tabs>
	);
}
