import React from "react";
import { Tabs, Tab, Box } from "grommet";
import styled from "styled-components";
import { Form, FormField } from "../styles/Forms";

const Button = styled.button`
	align-self: flex-end;
	margin-top: 1.4rem;
	color: #fff;
	background: green;
	border: none;
	border-radius: 3px;
	text-transform: uppercase;
	padding: 1rem;
	cursor: pointer;
`;

export default function NewPost() {
	return (
		<Tabs justify="start">
			<Tab title="QUESTIONS" color="yellow">
				<Box pad="medium">
					<Form>
						<label htmlFor="topic">Topic</label>
						<FormField name="topic" type="text" placeholder="Type Here" />
						<label htmlFor="question">Question</label>
						<FormField name="question" type="text" placeholder="Type Here" />
						<label htmlFor="mention">
							@mention someone to ask for an answer
						</label>
						<FormField name="mention" type="text" placeholder="Type Here" />
						<Button type="submit">Post</Button>
					</Form>
				</Box>
			</Tab>
			<Tab title="INSIGHTS">
				<Box pad="medium">
					<Form>
						<label htmlFor="topic">Topic</label>
						<FormField name="topic" type="text" placeholder="Type Here" />
						<label htmlFor="insight">Insight</label>
						<FormField name="insight" type="text" placeholder="Type Here" />
						<Button type="submit">Post</Button>
					</Form>
				</Box>
			</Tab>
		</Tabs>
	);
}
