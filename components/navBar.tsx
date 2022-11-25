import NextLink from "next/link";
import {
	Container,
	Box,
	Link,
	Stack,
	Heading,
	Flex,
	Menu,
	MenuItem,
	MenuList,
	MenuButton,
	useColorModeValue,
	IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import ThemeToggleButton from "./ThemeToggleButton";
import type { Router } from "next/dist/client/router"; //I use this import just to not use an any type
import LinkItem from "./LinkItem";

type props = {
	path: string;
};

const NavBar = ({ path }: props) => {
	return (
		<Box
			position="fixed"
			as="nav"
			w="100%"
			bg="green"
			style={{ backdropFilter: "blur(10px)" }}
			zIndex={1}
		>
			<Container
				display="flex"
				p={1}
				maxW="container.2xl"
				flexWrap="wrap"
				alignItems="center"
				justifyContent="space-between"
			>
				<Stack
					direction="row"
					display={{ base: "none", md: "flex" }}
					w="full"
					align="center"
					justify="space-evenly"
					flexGrow={1}
					mt={{ base: 4, nmd: 0 }}
				>
					<LinkItem href="/" path={path}>
						Home
					</LinkItem>
					<LinkItem href="/list" path={path}>
						List
					</LinkItem>
					<LinkItem href="/team" path={path}>
						My Team
					</LinkItem>
				</Stack>
				<Flex flex={1} justify="end">
					{/* <ThemeToggleButton /> */}
					<Box
						ml={2}
						display={{
							base: "inline-block",
							md: "none",
						}}
					>
						<Menu>
							<MenuButton
								as={IconButton}
								icon={
									<HamburgerIcon />
								}
								variant="outline"
								aria-label="Options"
							/>
							<MenuList>
								<NextLink
									href="/"
									passHref
								>
									<MenuItem
										as={
											Link
										}
									>
										Home
									</MenuItem>
								</NextLink>
								<NextLink
									href="/works"
									passHref
								>
									<MenuItem
										as={
											Link
										}
									>
										Works
									</MenuItem>
								</NextLink>
							</MenuList>
						</Menu>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default NavBar;
