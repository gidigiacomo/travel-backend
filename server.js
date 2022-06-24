import express from "express";
const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.sendFile("index.html", {
//     root: process.cwd(), // directory name
//   });
// });

// app.get("/playlist", (req, res) => {
//   res.sendFile("data/database.json", {
//     root: process.cwd(), // directory name
//   });
// });

// app.post("/video", (req, res) => {
//   console.log(req.body);
//   res.send("video added to playlist");
// });

// app.put("/video", (req, res) => {
//   res.send("video updated");
// });

// app.delete("/video", (req, res) => {
//   res.status(204).end();
// });

app.listen(8000, () => console.log("server is running on port 8000"));