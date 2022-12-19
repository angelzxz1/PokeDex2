import { Flex } from "@chakra-ui/react";
import Card from "../components/cards/Card";

const lnk =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png";
const nme = "Blaziken";

const Test = () => {
	let arr: number[] = [];
	for (let i = 0; i < 300; i++) {
		arr.push(i);
	}
	return (
		<Flex wrap="wrap" direction="column" maxW="30%" bg="red">
			{arr.map(item => {
				return <Card url={lnk} name={nme} />;
			})}
		</Flex>
	);
};

export default Test;
