import { Box, Flex, Grid, Image } from "@chakra-ui/react";

interface props {
	url: string;
	name: string;
}

const Card = ({ url, name }: props) => {
	return (
		<Grid border="solid 1px" borderColor="whiteAlpha.500">
			<Image src={url} />
			{name}
		</Grid>
	);
};
export default Card;
