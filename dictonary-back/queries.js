export const QUERIES = {
  select: {
    getAllWords: `
      SELECT 
        w.id as word_id,
        w.word,
        w.created_at,
        t.id as translation_id,
        t.specific_word,
        t.translation,
        t.short_description,
        t.description,
        t.examples
      FROM words w
      LEFT JOIN translations t ON w.id = t.word_id
      ORDER BY w.word
    `,
  },
  insert: {},
  delete: {},
  update: {},
  create: {},
};
