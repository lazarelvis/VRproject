const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

var path = require("path");

// viewed at http://localhost:8080
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/build/three.module.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/three.module.js"));
});
app.get("/main.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/main.css"));
});
app.get("/jsm/webxr/ARButton.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/jsm/webxr/ARButton.js"));
});
app.get("/jsm/loaders/GLTFLoader.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/jsm/loaders/GLTFLoader.js"));
});
app.get("/models/chair.gltf", function (req, res) {
  res.sendFile(path.join(__dirname + "/models/chair.gltf"));
});
app.get("/models/table.glb", function (req, res) {
  res.sendFile(path.join(__dirname + "/models/table.glb"));
});
app.get("/models/textures/Chair_Basecolor.png", function (req, res) {
  res.sendFile(path.join(__dirname + "/models/textures/Chair_Basecolor.png"));
});
app.get("/models/textures/GenericClassicTable001_color.png", function (
  req,
  res
) {
  res.sendFile(
    path.join(__dirname + "/models/textures/GenericClassicTable001_color.png")
  );
});
app.get("/Resources/imgRoom.jpg", function (req, res) {
  res.sendFile(path.join(__dirname + "/Resources/imgRoom.jpg"));
});
app.get("/Resources/chair.png", function (req, res) {
  res.sendFile(path.join(__dirname + "/Resources/chair.png"));
});
