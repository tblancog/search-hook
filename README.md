## Instructions

Install dependencies using `npm install`.

Run `npm start` to concurrently start the server and UI in development mode.

Open [http://localhost:3000](http://localhost:3000) to view the UI in the
browser. The page will reload if you make edits.

### API

- The API server is run on port `3001` while the React UI is run on port `3000`
- Your UI can call `/api/data?search=[some-query]` directly since
  the request will be proxied to `http://localhost/api/data?...`
- You will to need access the API on port `3001` if you're testing it directly
  from outside your application (e.g. http://localhost:3001/api/data?search=credit)
