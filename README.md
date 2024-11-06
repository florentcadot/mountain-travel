# Mountain Travel
A simple REST API as a backend for a mountain travel app.

Technical stack:
 
- Node 20.x
- Mongo 8
- Typescript
- Yarn
- Fastify
- Zod for validation
- Ts Standard as a linter and formatter

Clean architecture, clean code.

## Get started

````bash
# Install dependencies
yarn

# Launch mongo docker container
docker run --name mountain-travel -p 27017:27017 -d mongo@latest

# Start server
yarn start
````