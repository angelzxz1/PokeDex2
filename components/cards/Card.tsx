import { Box, Flex, Grid, Image } from "@chakra-ui/react";

interface props {
	url: string;
	name: string;
}

const Card = ({ url, name }: props) => {
	return (
		<Flex border="solid 1px" borderColor="whiteAlpha.500">
			<Image src={url} />
			{name}
		</Flex>
	);
};
export default Card;
