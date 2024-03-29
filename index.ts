import bodyParser from "body-parser";
import cors from "cors";

import Server from "./classes/server";
import router from "./routes/router";

const server = new Server();

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

server.app.use("/", router);

server.start(() => {
  console.log(`Server started on port ${server.port}`);
});
