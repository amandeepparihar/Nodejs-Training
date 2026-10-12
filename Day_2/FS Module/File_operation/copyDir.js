import fs from 'fs/promises'

await fs.cp("./src", "./dest", { recursive: true });