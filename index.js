import express from "express";
import cors from "cors";
import ProvinceRouter from "./src/controllers/province-controller.js";

export const provincias = [
    { id: 1, name: "Cor", fullName:"Cordoba" , latitude:0, longitude:0, display_order:100 },
    { id: 2, name: "For", fullName: "Formosa", latitude:0, longitude:0, display_order:100 },
    { id: 3, name: "Cha",fullName:"Chaco" , latitude:0, longitude:0, display_order:100 },
];

const app = express();
const port = 3000;

// Inclusión de los Middlewares
app.use(cors());
app.use(express.json());
app.use('/front', express.static('public'));
app.use("/api/provinces", ProvinceRouter);
app.use(unknownEndpoint);

app.listen(port, () => {
    console.log(`"server" Listening on port ${port}`);
})
