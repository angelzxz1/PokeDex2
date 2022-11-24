import { Sequelize } from "sequelize";
import * as pg from "pg";
const sequelize = new Sequelize(
	"postgresql://postgres:Xs0PQj7HzJqKaXjAMNkt@containers-us-west-36.railway.app:5980/railway",
	{
		dialectModule: pg,
	}
);

const caller = async () => {
	try {
		await sequelize.authenticate();
		return "Connection has been established successfully.";
	} catch (error) {
		return "Unable to connect to the database";
	}
};

const handler = async (req: any, res: any) => {
	const result = await caller();
	res.json({ result });
};

module.exports = handler;
