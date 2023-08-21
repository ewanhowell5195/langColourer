import config from "./config.json" assert { type: "json" }
import { openDirectory } from "easy-file-dialogs"
import path from "node:path"
import fs from "node:fs"

const dir = await openDirectory({
  title: "Select lang folder",
  initialDir: `${process.env.APPDATA}/.minecraft/resourcepacks`
}).catch(() => process.exit())

const out = path.join(dir, "coloured")

fs.rmSync(out, { recursive: true, force: true })
fs.mkdirSync(path.join(dir, "coloured"))

for (const file of fs.readdirSync(dir)) if (file.endsWith(".json")) {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(dir, file)))
    for (const [id, colour] of Object.entries(config)) {
      if (data[id]) data[id] = `§${colour}${data[id]}`
    }
    fs.writeFileSync(path.join(out, file), JSON.stringify(data, null, 2))
    console.log(`Processed ${file}`)
  } catch {
    console.log(`Skipping ${file}: Unable to parse file`)
  }
}

console.log("Finished processing language files")