import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`
        @font-face {
            font-family: 'Hurmit Nerd Font';
            src: url"(/HurmitFont.otf");
          }
    `}
	/>
);

export default Fonts;
