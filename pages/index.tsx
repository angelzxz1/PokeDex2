import { SearchBar } from "../components/home";
import Head from "next/head";
import { Flex, Grid, Button } from "@chakra-ui/react";
import { useState } from "react";
const Home = () => {
	const [altura, setAltura] = useState<number>(100);
	return (
		<>
			<Head>
				<title>PokeDex - Home</title>
			</Head>
			<Flex direction="column">
				<Flex
					h={`calc(${altura}vh - 4rem)`}
					direction="column"
					justify="center"
					transition="all 0.5s ease"
				>
					<Flex w="100%" direction="column">
						<SearchBar
							setAltura={setAltura}
						/>
					</Flex>
				</Flex>
				<Flex w="100%" bg="red"></Flex>
			</Flex>
		</>
	);
};

export default Home;
