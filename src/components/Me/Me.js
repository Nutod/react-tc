import React from "react";
import styled from "styled-components";
import { RotateRight } from "grommet-icons";
import UserOne from "../../assets/images/user1.jpg";
import UserTwo from "../../assets/images/userImage2.jpg";

const CardWrapper = styled.div`
	align-self: start;
	display: flex;
	flex-direction: column;
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 1.2rem;
	background: #fff;

	@media (max-width: 53em) {
		font-size: 1.1rem;
	}
`;

const CardHeader = styled.div`
	text-transform: uppercase;
	background: #ddd;
	padding: 1rem;
`;

const Container = styled.div`
	padding: 1rem;
	border-bottom: 1px solid #ddd;
`;

const ContainerHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Title = styled.p`
	text-transform: uppercase;
`;

const Icon = styled.div`
	color: #127bdd;
	display: flex;
	align-items: center;

	p {
		margin-left: 0.5rem;
	}
`;

const ContainerContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

const ContainerContent = styled.div`
	display: flex;
`;

const ContainerContentImage = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	margin-right: 1rem;
`;

const ContainerContentHeader = styled.p``;

const ContainerContentText = styled.p`
	color: #888;
	font-size: 1rem;
	line-height: 1.2;
`;

const ContainerContentDelete = styled.p`
	font-size: 2rem;
	transition: all 0.3s;
	backface-visibility: hidden;
	color: #aaa;

	&:hover {
		cursor: pointer;
		transform: translateY(-1px);
		color: #888;
	}
`;

const Description = styled.p`
	color: #000;
	margin-top: -1rem;
	margin-bottom: 1rem;
`;

const Questions = styled(Description)`
	margin-top: 0;
`;

export default function Me() {
	return (
		<CardWrapper>
			<CardHeader>For You</CardHeader>
			<Container>
				<ContainerHeader>
					<Title>Sessions</Title>
					<Icon>
						<RotateRight color="#127bdd" size="small" />
						<p>refresh</p>
					</Icon>
				</ContainerHeader>
				<ContainerContentWrapper>
					<ContainerContent>
						<ContainerContentImage src={UserOne} alt="Yomi Adedeji" />
						<div>
							<ContainerContentHeader>Yomi Adedeji</ContainerContentHeader>
							<ContainerContentText>
								Managing Partner @Softcom
							</ContainerContentText>
						</div>
					</ContainerContent>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
				<ContainerContentWrapper>
					<ContainerContent>
						<ContainerContentImage src={UserTwo} alt="Don Jazzy" />
						<div>
							<ContainerContentHeader>Don Jazzy</ContainerContentHeader>
							<ContainerContentText>
								Managing Partner @Softcom
							</ContainerContentText>
						</div>
					</ContainerContent>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
			</Container>
			<Container>
				<ContainerHeader>
					<Title>Insights</Title>
					<Icon>
						<RotateRight color="#127bdd" size="small" />
						<p>refresh</p>
					</Icon>
				</ContainerHeader>
				<ContainerContentWrapper>
					<ContainerContent>
						<ContainerContentImage src={UserOne} alt="Yomi Adedeji" />
						<div>
							<ContainerContentHeader>Cyrus Majebi</ContainerContentHeader>
							<ContainerContentText>Co-founder @Two cents</ContainerContentText>
						</div>
					</ContainerContent>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
				<Description>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quis
					recusandae non cumque dolores possimus aperiam.
				</Description>
				<ContainerContentWrapper>
					<ContainerContent>
						<ContainerContentImage src={UserTwo} alt="Yomi Adedeji" />
						<div>
							<ContainerContentHeader>Cyrus Majebi</ContainerContentHeader>
							<ContainerContentText>Co-founder @Two cents</ContainerContentText>
						</div>
					</ContainerContent>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
				<Description>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quis
					recusandae non cumque dolores possimus aperiam.
				</Description>
			</Container>
			<Container>
				<ContainerHeader>
					<Title>Questions</Title>
					<Icon>
						<RotateRight color="#127bdd" size="small" />
						<p>refresh</p>
					</Icon>
				</ContainerHeader>
				<ContainerContentWrapper>
					<Questions>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					</Questions>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
				<ContainerContentWrapper>
					<Questions>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					</Questions>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
			</Container>
		</CardWrapper>
	);
}
