import { Flex, Box, Grid, Img } from "@chakra-ui/react";
type props = {
	key: number | string;
	imgLink: string;
	children: any;
};
const Pokemon = ({ key, imgLink, children }: props) => {
	return (
		<Flex
			key={key}
			minW="30%"
			direction="column"
			align="center"
			minH="300px"
			borderRadius="20px"
			border="1px solid"
			borderColor="whiteAlpha.500"
			_hover={{
				borderColor: "green",
				transition: "0.2s",
				cursor: "pointer",
				boxShadow: "0px 0px 10px green, 0px 0px 10px green inset",
				transform: "scale(1.05)",
			}}
		>
			<Box>{children}</Box>
			<Img src={imgLink} w="100%" />
		</Flex>
	);
};

export default Pokemon;
