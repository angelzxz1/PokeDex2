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
		<>
			{arr.map(item => {
				return <Card url={lnk} name={nme} />;
			})}
		</>
	);
};

export default Test;
