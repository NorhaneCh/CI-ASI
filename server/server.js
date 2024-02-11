const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const domaineRouter = require("./routers/domaines.js");
const partenaireRouter = require("./routers/partenaires.js");
const formateurRouter = require("./routers/formateurs.js");
const formationRouter = require("./routers/formations.js");
const themeRouter = require("./routers/themes.js");

const PORT = process.env.PORT || 5000;

// app

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/domaines", domaineRouter);
app.use("/partenaires", partenaireRouter);
app.use("/themes", themeRouter);
app.use("/formateurs", formateurRouter);
app.use("/formations", formationRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// domaines
// app.get("/domaines", async (req, res) => {
//   try {
//     const domaines = await prisma.domaine.findMany();
//     res.json(domaines);
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ error: "Erreur serveur" });
//   }
// });

// app.post("/domaines", async (req, res) => {
//   const { designation } = req.body;
//   try {
//     const domaine = await prisma.domaine
//       .create({
//         data: {
//           designation: designation,
//         },
//       })
//       .then((domaine) => {
//         res.json(domaine);
//       });
//   } catch (e) {
//     console.log(e);
//     res.status(400).json({ error: e.message });
//   }
// });

// app.delete('/domaines:id', async (req, res) => {
//     const { id } = parseInt(req.params.id);
//     try {

//         const domaine = await prisma.domaine.delete({
//             where: {
//                 id: parseInt(id)
//             }
//         })
//         if (!domaine) {
//             return res.status(404).json({error: 'domaine not found'})
//         }
//         res.json(domaine);
//     }
//     catch (e) {
//         console.log(e);
//         res.status(500).json({ error: e.message });
//     }
// })

// app.post('/themes', async (req, res) => {
//     const { domId, designation, Duree, Niveau, TarifP, isCertif } = req.body;
//     try {
//         const theme = await prisma.theme.create({
//             data: {
//                 domId : domId,
//                 designation : designation,
//                 Duree : Duree,
//                 Niveau :  Niveau,
//                 TarifP : TarifP,
//                 isCertif: isCertif
//             }
//         }).then((theme) => {
//             res.json(theme);
//         })
//     }
//     catch (e) {
//         console.log(e);
//         res.status(400).json({ error: e.message });
//     }
// })

// app.delete('/themes/:id', async (req, res) => {
//     const {id} = req.params;

//     try {

//         const theme = await prisma.theme.delete({
//             where: {
//                 id: parseInt(id)
//             }
//         })
//         if (!theme) {
//             return res.status(404).json({error: 'theme not found'})
//         }
//         res.status(200).json({message: 'theme deleted'})

//     }
//     catch (error) {
//         res.status(400).json({error: error.message})
//     }
// })

// app.get('/themes/:domId', async (req, res) => {
//     const {domId} = req.params;
//     try {
//         const themes = await prisma.theme.findMany({
//             where: {
//                 domId: parseInt(domId)
//             }
//         })
//         res.json(themes);
//     }
//     catch (e) {
//         console.log(e);
//         res.status(500).json({ error: e.message });
//     }
// })
