import { Flex, Box, Grid, Img } from "@chakra-ui/react";
import { useState } from "react";
type props = {
	key: number | string;
	imgLink: string;
	children: any;
};
const Pokemon = ({ key, imgLink, children }: props) => {
	const [anima, setAnima] = useState({ opacity: 0, blur: "" });
	return (
		<Flex
			key={key}
			minW="30%"
			direction="column"
			align="center"
			justify="center"
			minH="300px"
			borderRadius="20px"
			border="1px solid"
			borderColor="whiteAlpha.500"
			position="relative"
			_hover={{
				borderColor: "green",
				transition: "0.2s",
				cursor: "pointer",
				boxShadow: "0px 0px 10px green, 0px 0px 10px green inset",
				transform: "scale(1.05)",
			}}
			onMouseEnter={() => {
				setAnima({ opacity: 1, blur: "10px" });
			}}
			onMouseLeave={() => {
				setAnima({ opacity: 0, blur: "" });
			}}
			overflow="hidden"
		>
			<Box
				position="absolute"
				fontSize="4rem"
				zIndex="10"
				opacity={anima.opacity}
				transition="0.2s"
				// bg="#00960070"
				w="100%"
				textAlign="center"
			>
				{children}
			</Box>
			<Img
				src={imgLink}
				w="100%"
				transition="0.2s"
				filter={`blur(${anima.blur})`}
			/>
		</Flex>
	);
};

export default Pokemon;
