const express = require("express");
const app = express();
const planetsRoutes = require("./routes/planets");
const { setupDb } = require("./db");

app.use(express.json());
app.use("/api/planets", planetsRoutes);

setupDb().then(() => {
  app.listen(3000, () => {
    console.log("Server attivo su http://localhost:3000 e DB inizializzato");
  });
});