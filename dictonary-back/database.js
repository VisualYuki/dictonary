import { DatabaseSync } from "node:sqlite";
import camelcaseKeys from "camelcase-keys";
import { QUERIES } from "./queries.js";

let db;

/**
insert into translations (word_id, short_description, description, translation, specific_word) values (
2, 
'too much',
'more than a particular amount, number, age',
'пере, сверх',
'over'
)
 */

// Инициализация базы данных
export async function initDatabase() {
  db = new DatabaseSync("./database.db");

  //db.pragma("foreign_keys = ON");

  // Создание таблиц
  db.exec(`
    CREATE TABLE IF NOT EXISTS words (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word TEXT UNIQUE NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS translations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      word_id INTEGER NOT NULL,
      specific_word TEXT NOT NULL,
      translation TEXT NOT NULL,
      short_description TEXT,
      description TEXT,
      examples TEXT,
      FOREIGN KEY (word_id) REFERENCES words (id)
    );
  `);

  /**
   *     CREATE TABLE IF NOT EXISTS examples (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      translation_id INTEGER NOT NULL,
      example TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (translation_id) REFERENCES translations (id)
    );
   */

  return db;
}

export async function getAllWords() {
  const rows = db.prepare(QUERIES.select.getAllWords).all();

  const wordsMap = new Map();

  for (const row of rows) {
    if (!wordsMap.has(row.word_id)) {
      wordsMap.set(row.word_id, {
        id: row.word_id,
        word: row.word,
        translations: [],
      });
    }

    const word = wordsMap.get(row.word_id);

    if (row.translation_id) {
      let translation = word.translations.find(
        (t) => t.id === row.translation_id
      );

      if (!translation) {
        translation = {
          id: row.translation_id,
          specific_word: row.specific_word,
          translation: row.translation,
          short_description: row.short_description,
          description: row.description,
          examples: row.examples,
        };
        word.translations.push(translation);
      }
    }
  }

  const result = Array.from(wordsMap.values());

  console.log("result", result);

  // Преобразуем snake_case в camelCase для всех уровней
  return camelcaseKeys(result, { deep: true });
}

export { db };
