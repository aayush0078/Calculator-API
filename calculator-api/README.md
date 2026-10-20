# 🧮 Calculator API

A RESTful calculator API built with **Node.js** and **Express**. Clean architecture, input validation, error handling, and a full test suite with Jest + Supertest.

## Endpoints

| Method | Route | Body | Description |
|--------|-------|------|-------------|
| GET  | `/` | — | API info & available endpoints |
| POST | `/calculate/add` | `{ a, b }` | a + b |
| POST | `/calculate/subtract` | `{ a, b }` | a − b |
| POST | `/calculate/multiply` | `{ a, b }` | a × b |
| POST | `/calculate/divide` | `{ a, b }` | a ÷ b |
| POST | `/calculate/power` | `{ a, b }` | aᵇ |
| POST | `/calculate/modulo` | `{ a, b }` | a % b |
| POST | `/calculate/sqrt` | `{ a }` | √a |

## Getting Started

```bash
cd calculator-api
npm install
npm start
# API is live at http://localhost:3000
```

### Example

```bash
curl -X POST http://localhost:3000/calculate/add \
  -H "Content-Type: application/json" \
  -d '{"a": 10, "b": 5}'
# { "success": true, "result": 15 }
```

## Running Tests

```bash
npm test
```

## Contributing 🎃

Good first issues:
- [ ] Add `POST /calculate/factorial` endpoint
- [ ] Add `POST /calculate/log` (base-10 and natural log)
- [ ] Add request rate limiting with `express-rate-limit`
- [ ] Add Swagger/OpenAPI documentation
- [ ] Add input sanitization middleware
- [ ] Add `GET /calculate/history` to track recent calculations

1. Fork the repo
2. Branch: `git checkout -b feature/factorial`
3. Run `npm test` and make sure everything passes
4. Open a Pull Request

## License

MIT
