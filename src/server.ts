import express, {Response, Request} from "express";
import 'dotenv/config';
import project from '../package.json';


const app = express();

app.get('/', (request: Request, response: Response) => {
	return response.status(200).send({
		name: 'Finanças',
		teste: 1,
		version: project.version
	});
});


if(process.env.NODE_ENV !== "tests") {
	app.listen(7011, function (){
		console.log("Tradx running on port %d", 7011);
	});
}

export { app };
