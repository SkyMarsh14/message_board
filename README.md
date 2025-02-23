# Mini Message Board

A simple message board application built with Express.js and EJS templating engine. Users can post messages, view all messages, and see message details.

## Features

- View all messages on the homepage
- Create new messages through a form
- Display message details including author, content, and timestamp
- View individual message details on a separate page

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SkyMarsh14/message_board.git
cd mini-message-board
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
mini-message-board/
├── views/
│   ├── index.ejs
│   ├── form.ejs
│   └── message.ejs
├── routes/
│   └── index.js
├── public/
│   └── stylesheets/
├── app.js
└── package.json
```

## Technical Details

### Dependencies

- Express.js - Web application framework
- EJS - Templating engine
- Body-parser - Middleware for parsing request bodies

### Data Structure

Messages are stored in an array with the following structure:

```javascript
{
  text: String,    // Message content
  user: String,    // Author name
  added: Date      // Timestamp
}
```

### Routes

- `GET /` - Display all messages
- `GET /new` - Show new message form
- `POST /new` - Create a new message
- `GET /message/:id` - View individual message details

## Development

### Running in Development Mode

```bash
npm run dev
```

### Message Format

Messages are stored in the following format:

```javascript
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
];
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Project requirements based on The Odin Project's NodeJS course
- Express.js documentation and community
