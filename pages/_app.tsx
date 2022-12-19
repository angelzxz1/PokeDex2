import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../lib/theme";
import { AppProps } from "next/app";
import Main from "../components/layouts/main";
import "../lib/global.css";
import Font from "../fonts/Font";

function MyApp({ Component, pageProps, router }: AppProps) {
	// console.log(theme);
	return (
		<ChakraProvider theme={theme}>
			{/* <Font /> */}
			<Main router={router}>
				<Component {...pageProps} />
			</Main>
		</ChakraProvider>
	);
}

export default MyApp;
