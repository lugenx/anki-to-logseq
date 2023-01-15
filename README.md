# Anki To Logseq

A simple command line app that converts Anki cards to Logseq flashcards.

## How To Use

### Export your anki cards

- Go to File>Export
- Chose export format as "Cards in Plain Text"
- Select your Anki Deck to Export
- Save the file in a folder in your computer

### Convert the file

- Download 'atol.js' file from this repo to the same folder with your exported text file.
- Run the file in the command line like below:
  ```
  node atol.js
  ```
- Enter the name of the file you want to convert to the command line and click `Enter`
- Look for the new converted `.md` file in the same folder.
