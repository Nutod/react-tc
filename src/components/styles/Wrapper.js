import styled from "styled-components";

export const DesktopNavigationWrapper = styled.nav`
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		flex-wrap: wrap;
	}

	li {
		&:not(:last-child) {
			margin-right: 1rem;
		}
	}

	a {
		text-decoration: none;
		color: #fff;
	}

	input {
		font-family: inherit;
		width: 20vw;
		border: none;
		border-radius: 4px;
		padding: 0.4rem 0.6rem;
		background: #f5f5f5;
	}
`;

export const MobileNavigationWrapper = styled.nav`
	ul {
		display: flex;
		list-style: none;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		flex-wrap: wrap;
	}

	li {
		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;

export const ContainerContent = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const ContainerContentImage = styled.img`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1rem;
`;

export const ContainerContentHeader = styled.p`
	font-size: 1rem;

	span {
		color: #000;
		font-weight: 600;
	}
`;

export const ContainerContentText = styled.p`
	color: #888;
	font-size: 0.8rem;
	line-height: 1;
`;

export const ContainerContentPlaceholder = styled.div`
	width: 2rem;
	background: green;
	height: 2rem;
	border-radius: 50%;
	margin-right: 1rem;
`;
