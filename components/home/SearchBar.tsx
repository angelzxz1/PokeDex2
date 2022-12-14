import { Input, Flex, Grid, Button } from "@chakra-ui/react";
import React, { useState, Dispatch, SetStateAction } from "react";

const SearchBar = ({
	setAltura,
}: {
	setAltura: Dispatch<SetStateAction<number>>;
}) => {
	const [search, setSearch] = useState("");
	return (
		<Flex w="100%" alignItems="center" justifyContent="center">
			<Input
				placeholder="- Search -"
				w="75%"
				_focus={{ outline: "none" }}
				bg="transparent"
				color="green"
				borderRadius="none"
				border=""
				borderBottom="1px solid green"
				_hover={{
					borderBottom: "1px solid green",
				}}
				onKeyDown={e => {
					if (e.key === "Enter") {
						setAltura(prev =>
							prev === 100 ? 20 : 100
						);
					}
				}}
				outline="none"
				textAlign="center"
				fontSize="1.5rem"
				fontWeight="bold"
			/>
		</Flex>
	);
};

export default SearchBar;
