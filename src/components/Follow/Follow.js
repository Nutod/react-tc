import React from "react";
import styled from "styled-components";

const FollowWrapper = styled.div`
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 1.3rem;
	background: #fff;
	margin-bottom: 0.5rem;

	@media (max-width: 53em) {
		font-size: 1.1rem;
	}
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
	font-size: 1rem;
`;

const Icon = styled.p`
	color: blueviolet;
`;

const ContainerContentWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;
`;

const ContainerContent = styled.div`
	display: flex;
	align-items: center;
`;

const ContainerContentImage = styled.div`
	background: pink;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	margin-right: 0.5rem;
`;

const ContainerContentHeader = styled.p`
	font-size: 1rem;
`;

const ContainerContentText = styled.p`
	color: #000;
	font-size: 0.8rem;
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

const FollowButton = styled.button`
	border: none;
	background: #fff;
	color: green;
	border-radius: 8px;
	border: 2px solid green;
	text-transform: uppercase;
	font-size: 1rem;
	margin-right: 1rem;

	@media (max-width: 53em) {
		margin-left: 1rem;
	}
`;

export default function Follow() {
	return (
		<FollowWrapper>
			<Container>
				<ContainerHeader>
					<Title>Who to Follow</Title>
					<Icon>refresh</Icon>
				</ContainerHeader>
				<ContainerContentWrapper>
					<ContainerContent>
						<ContainerContentImage />
						<div>
							<ContainerContentHeader>Yomi Adedeji</ContainerContentHeader>
							<ContainerContentText>
								Managing Partner @Softcom
							</ContainerContentText>
						</div>
						<FollowButton>Follow</FollowButton>
					</ContainerContent>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
				<ContainerContentWrapper>
					<ContainerContent>
						<ContainerContentImage />
						<div>
							<ContainerContentHeader>Yomi Adedeji</ContainerContentHeader>
							<ContainerContentText>
								Managing Partner @Softcom
							</ContainerContentText>
						</div>
						<FollowButton>Follow</FollowButton>
					</ContainerContent>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
				<ContainerContentWrapper>
					<ContainerContent>
						<ContainerContentImage />
						<div>
							<ContainerContentHeader>Yomi Adedeji</ContainerContentHeader>
							<ContainerContentText>
								Managing Partner @Softcom
							</ContainerContentText>
						</div>
						<FollowButton>Follow</FollowButton>
					</ContainerContent>
					<ContainerContentDelete>&times;</ContainerContentDelete>
				</ContainerContentWrapper>
			</Container>
		</FollowWrapper>
	);
}
