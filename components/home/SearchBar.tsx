import { Input, Flex, Grid, Button } from "@chakra-ui/react";
import React, { useState, Dispatch, SetStateAction } from "react";

const SearchBar = ({
	setAltura,
}: {
	setAltura: Dispatch<SetStateAction<number>>;
}) => {
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
				outline="none"
				textAlign="center"
				fontSize="1.5rem"
				fontWeight="bold"
			/>
			<Button
				onClick={() => {
					setAltura(prev =>
						prev === 100 ? 20 : 100
					);
				}}
			>
				Toggle
			</Button>
		</Flex>
	);
};

export default SearchBar;
