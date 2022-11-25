import { Flex, Box, Grid, Img } from "@chakra-ui/react";
type props = {
	key: number | string;
	imgLink: string;
	children: any;
};
const Pokemon = ({ key, imgLink, children }: props) => {
	return (
		<Grid key={key} bg="red">
			<Box>{children}</Box>
			<Img src={imgLink} />
		</Grid>
	);
};

export default Pokemon;
