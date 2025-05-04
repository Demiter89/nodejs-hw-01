import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

export const PATH_DB = path.join(__dirname, "..", "db", "db.json");