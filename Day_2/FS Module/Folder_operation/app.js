import fs from "fs/promises"

//creating folder
await fs.mkdir("./fo_folder", { recursive: true })

//deleting folder, with content, if it exists
await fs.rm("./fo_folder", { recursive: true, force: true })