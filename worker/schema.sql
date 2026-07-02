CREATE TABLE IF NOT EXISTS conversations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  user_message TEXT NOT NULL,
  assistant_reply TEXT NOT NULL,
  errored INTEGER NOT NULL DEFAULT 0
);
