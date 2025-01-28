# Emoji Dictionary React App

A simple React application that displays a dictionary of emojis with their meanings.

## Features

- Displays emojis with their names and descriptions
- Clean, component-based architecture
- Easy to update emoji database

## Components

- `App`: Main component that manages state and data flow
- `Header`: Displays the application header
- `Dictionary`: Container component for emoji entries
- `Entry`: Individual emoji entry with emoji, title, and description

## Data Structure

The app uses an `emojipedia` data source with the following structure:
```javascript
{
  emoji: "string",
  name: "string",
  meaning: "string"
}
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm start
```

3. Open `http://localhost:3000` to view the app in your browser.
