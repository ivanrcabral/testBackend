import express from "express"
import bodyParser from "body-parser"
import http from "http"
import api from "./server/api"

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", port);

app.use("/api", api);

app.get("/", (req, res) => {
  res.status(200).send('El servidor esta en linea!');
});

const server = http.createServer(app);

server.listen(port, () => console.log("Server started in port http://localhost:" + port));
