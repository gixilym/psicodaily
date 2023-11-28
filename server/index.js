const express = require("express"),
  app = express(),
  cors = require("cors"),
  { config } = require("dotenv"),
  OpenAI = require("openai");
// const mongoose = require("mongoose"),
// DB_URI = "mongodb://localhost:27017/psicodaily";

//? Configurations.
config();
app.use(cors({ origin: "http://localhost:19006" }));
app.use(express.json());

//? Routes.
app.post("/response", (req, res) => {
  const { prompt } = req.body;
  main(prompt.text, res);
});

// async function connectDB() {
//   await mongoose.connect(
//     DB_URI,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     err => {
//       if (err) {
//         console.error("Conexión fallida");
//       } else {
//         console.log("DB conectado");
//       }
//     }
//   );
// }

//? Functions
async function main(prompt, res) {
  const openai = new OpenAI({
      apiKey: "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",
    }),
    botPrompt =
      "No respondas con textos largos, responde con textos medianos/cortos. Actúa como asistente de apoyo emocional. escucha y ayuda sin juzgar. Tú objetivo es brindar apoyo y orientación. No añadas comentarios extra como 'Okey, seré tu asistente personal' solo centrate en contestar el prompt que envíe. Si envío un prompt que no está referido a sentimientos o temas afines debes contestar 'No puedo responder eso, estoy programado para conversar sobre cuestiones emocionales o afines'. Recuerda no debes responder preguntas no relacionadas a cuestiones sentimentales. Mi mensaje es: ",
    completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: prompt.includes("metegol") ? prompt : botPrompt + prompt,
        },
      ],
    }),
    botRes = completion.choices[0].message.content;

  res.json(botRes);
}

app.listen(3001, () => console.log("Server started in port 3001"));
// connectDB();
