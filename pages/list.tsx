import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import { Pokemon } from "../components/list";

const List = () => {
	const [pokeList, setPokeList] = useState<{
		list: { name: string; sprite: string }[];
		loaded: boolean;
	}>({ list: [], loaded: false });
	const load = async () => {
		if (!pokeList.loaded) {
			let tempArray: { name: string; sprite: string }[] = [];
			for (let i = 1; i <= 30; i++) {
				const res = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${i}`
				);
				tempArray.push({
					name: res.data.name,
					sprite: res.data.sprites.front_default,
				});
			}
			setPokeList({ list: tempArray, loaded: true });
		}
	};
	useEffect(() => {
		load();
	}, []);
	return (
		<>
			<Head>
				<title>PokeDex - List</title>
			</Head>
			<Box>
				{pokeList.loaded ? (
					pokeList.list.map((item, i) => (
						<Pokemon
							key={i}
							imgLink={item.sprite}
						>
							{item.name}
						</Pokemon>
					))
				) : (
					<Box>loading...</Box>
				)}
			</Box>
		</>
	);
};
List.Title = "List";

export default List;
