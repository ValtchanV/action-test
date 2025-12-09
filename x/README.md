# Weather REST Service

A simple Node.js REST service built with TypeScript that provides a weather endpoint.

## Features

- TypeScript for type safety
- Express.js REST API
- Weather endpoint with mock data
- Health check endpoint
- Comprehensive tests with Jest
- ESLint for code quality
- Docker support

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

```bash
npm install
```

### Development

Run the service in development mode with hot reload:

```bash
npm run dev
```



The service will be available at `http://localhost:3000`

### Build

Build the TypeScript code and create a Docker image:

```bash
npm run build
```

This will:
1. Compile TypeScript to JavaScript
2. Build a Docker image tagged as `weather-service:latest`

### Run Production Build

```bash
npm start
```

### Run Docker Container

After building the Docker image:

```bash
docker run -p 3000:3000 weather-service:latest
```

## API Endpoints

### GET /weather

Returns mock weather data for a city.

**Query Parameters:**
- `city` (optional): City name (defaults to "Unknown")

**Example:**
```bash
curl http://localhost:3000/weather?city=London
```

**Response:**
```json
{
  "city": "London",
  "temperature": 25,
  "condition": "Sunny",
  "humidity": 65,
  "windSpeed": 15,
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

### GET /health

Health check endpoint.

**Example:**
```bash
curl http://localhost:3000/health
```

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```


## Scripts

- `npm run build` - Compile TypeScript and build Docker image
- `npm start` - Run the production build
- `npm run dev` - Run in development mode with hot reload
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint and fix auto-fixable issues

## Testing

Run the test suite:

```bash
npm test
```

## Linting

Check code quality:

```bash
npm run lint
```

Fix auto-fixable issues:

```bash
npm run lint:fix
```
