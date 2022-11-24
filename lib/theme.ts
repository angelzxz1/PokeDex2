import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export default extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
		disableTransitionOnChange: true,
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				bg: mode("white", "black")(props),
				color: mode("gray.800", "white")(props),
				overflowX: "hidden",
			},
		}),
	},
});
