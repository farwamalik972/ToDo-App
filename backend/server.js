import express from 'express';
import Connection from './db/db.js';
import routes from './route/route.js';
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors())
app.use(routes)
Connection();
app.listen(port, () => console.log(`Server Started at Port ${port}`));
