import path from "path"
import express from "express";
import cors from "cors";

const app = express();
app.use(express.static('public'))
app.use(cors())






app.use(express.json());




app.get("/", (req, res) => {
    console.log(process.cwd() + "/res/1.png" )


        res.sendFile("/res/1.png", {
          root: process.cwd(), // directory name
        });
    

//   res.sendFile(path.join(__dirname, "./res/1.png"), {
//     root: process.cwd(), // directory name
//   });
});

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