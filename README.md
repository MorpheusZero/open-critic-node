# open-critic-node
A NodeJS Wrapper for the Open Critic API

### Installation

```bash
npm -i open-critic-node
```

### Usage

First import the client:

Typescript
```typescript
import { OpenCriticClient } from "open-critic-node";
```

Javascript CommonJS
```javascript
const OpenCriticClient = require("open-critic-node").OpenCriticClient;
```

### Method Examples

I'll just be showing examples in Typescript from here on out. The typings are included in the lib so check it out!
```typescript
// Instantiate a new client.
const client = new OpenCriticClient();

// Get the first page of PS5 games (game summary only)
const games = await client.getGames({
    page: 0,
    platforms: [
        PlatformType.SONY_PLAYSTATION_5
    ],
});

// Get a game's details by its ID. (This example is the ID for Demon's Souls)
const game = await client.getGameById(10255);
```
