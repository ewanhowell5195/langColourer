# langColourer
### Easily colour text across all language files

langColourer is a program that will apply colour codes to lines across all the language files in a Minecraft resource pack.

Modified files will be output to a `coloured` folder inside the language folder.

## Installing
How to install this program:
1. Download this repository as a zip from `Code > Download ZIP`, or from [this link](https://github.com/ewanhowell5195/langColourer/archive/refs/heads/main.zip)
2. Extract the zip archive to a folder
3. Install Node.js and the NPM packages
   - Automatic (Windows):
     1. Run the `install.bat` file
   - Manually (Windows / MacOS):
     1. Download and install [**Node.js**](https://nodejs.org/it/download/current)
     2. Open a terminal window and navigate to the extracted zip location
     3. Run the command `npm install`

## Usage
To use this program, you will need to configure the `config.json` file to tell it what lines to colour, and what colour to colour them. This file follows the following structure:
```js
{
  "language.key": "colour",
  "language.key.2": "colour",
  "language.key.3": "colour",
  "language.key.4": "colour"
}
```
For example:
```js
{
  "block.minecraft.blue_wool": 9,
  "block.minecraft.cobblestone": 7,
  "block.minecraft.dirt": 4,
  "container.furnace": 6,
  "entity.minecraft.bee": "e",
  "entity.minecraft.creeper": "a",
  "entity.minecraft.shulker": 5
}
```
You can view a list of all colour codes [here.](https://www.digminecraft.com/lists/color_list_pc.php). You do not need to provide the `§` character.

After configuring the config file, run the program and select the language folder to process. The changes will be applied to every matching line across all the language files that are present.

## Running
How to run this program:
- Windows
  1. Run `run.bat`
- MacOS
  1. Open a terminal window and navigate to the extracted zip location 
  2. Run `node index.js`