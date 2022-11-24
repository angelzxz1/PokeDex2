import { Sequelize } from "sequelize";
import * as pg from "pg";
const sequelize = new Sequelize(
	"postgresql://postgres:Xs0PQj7HzJqKaXjAMNkt@containers-us-west-36.railway.app:5980/railway",
	{
		dialectModule: pg,
	}
);

const handler = async (req: any, res: any) => {
	const result = await sequelize.query("SELECT * FROM users");
	res.json(result);
};

module.exports = handler;
