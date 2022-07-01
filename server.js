import express from "express";
import data from "./model/data.json" assert { type: "json" };
import cors from "cors";

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

////////// ROUTES //////////
app.get("/", (req, res) => res.send(data));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));