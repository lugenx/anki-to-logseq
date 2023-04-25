const fs = require("node:fs");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function to format text
const formatText = (text) => {
  const replacedText = text.replaceAll("\t", "\tBACK");

  let lines = replacedText.split(/\t|\n/);

  let newText = "";

  for (let i = 0; i < lines.length; i++) {
    if (
      lines[i].slice(0, 11) === "#separator:" ||
      lines[i].slice(0, 6) === "#html:"
    ) {
      continue;
    }

    if (lines[i].startsWith("BACK")) {
      newText += "\t- " + lines[i].substring(4) + "\n";
    } else if (lines[i]) {
      newText += "- " + lines[i] + " #card\n";
    }
  }
  return newText;
};

// read file and format it
const convertAndSave = (fileToConvert) => {
  fs.readFile(`./${fileToConvert}.txt`, "utf8", (err, data) => {
    if (err) throw err;
    let formattedText = formatText(data);
    fs.writeFile(`${fileToConvert}-converted.md`, formattedText, (err) => {
      if (err) throw err;

      console.log(
        "\n\x1b[92m The file has been formatted and saved! \x1b[0m\n"
      );
    });
  });
};

readline.question(
  "\n\x1b[33m Enter the name of the file that exported from the Anki: \x1b[0m\n\n> ",
  (userInput) => {
    convertAndSave(userInput);
    readline.close();
  }
);
