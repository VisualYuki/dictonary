import express from "express";
import { initDatabase, getAllWords } from "./database.js";

const app = express();
const port = 3013;

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

let isDbInitialized = false;

async function initializeApp() {
  try {
    await initDatabase();
    //await migrateFromJSON();
    isDbInitialized = true;
    console.log("Приложение готово к работе (node:sqlite)");
  } catch (error) {
    console.error("Ошибка инициализации:", error);
  }
}

// Получить все слова
app.get("/all", async (req, res) => {
  try {
    if (!isDbInitialized) {
      return res.status(503).json({ error: "База данных не инициализирована" });
    }
    const words = await getAllWords();
    res.json(words);
  } catch (error) {
    console.error("Ошибка при получении слов:", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

const server = app.listen(port, async () => {
  console.log(`Сервер запущен на порту ${port} (node:sqlite)`);
  await initializeApp();
});

process.on("SIGTERM", () => {
  console.log("SIGTERM сигнал получен: закрытие HTTP сервера");
  server.close(() => {
    console.log("HTTP сервер закрыт");
  });
});

process.on("SIGINT", () => {
  console.log("SIGINT сигнал получен: закрытие HTTP сервера");
  server.close(() => {
    console.log("HTTP сервер закрыт");
  });
});
