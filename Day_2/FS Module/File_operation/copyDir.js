import fs from 'fs/promises'

await fs.cp("./src", process.cwd(), { recursive: true });