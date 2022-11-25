import { SearchBar } from "../components/home";
import { Flex, Grid, Button } from "@chakra-ui/react";
import { useState } from "react";
const Home = () => {
	const [altura, setAltura] = useState<number>(100);
	return (
		<Flex direction="column">
			<Flex
				h={`calc(${altura}vh - 4rem)`}
				direction="column"
				justify="center"
				transition="all 0.5s ease"
				bg="purple"
			>
				<Flex w="100%" direction="column">
					<SearchBar setAltura={setAltura} />
				</Flex>
			</Flex>
			<Flex w="100%" bg="red"></Flex>
		</Flex>
	);
};

export default Home;
