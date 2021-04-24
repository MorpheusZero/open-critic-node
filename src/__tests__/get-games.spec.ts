import { OpenCriticClient } from "../client";
import { PlatformType } from "../client/enums/platform-type";

const client = new OpenCriticClient();

// Storing state between tests.
let firstGameId: number | null = null;

test("get the first page of all games", async () => {
  const games = await client.getGames({
    page: 0,
    platforms: [],
  });
  expect(games.length).toBeGreaterThan(0);
  firstGameId = games[0].id;
});

test("get the third page of all games", async () => {
  const games = await client.getGames({ page: 2, platforms: [] });
  expect(games.length).toBeGreaterThan(0);
  expect(games[0].id).not.toBe(firstGameId);
});

test("getting a page that does not exist should be handled gracefully", async () => {
  const games = await client.getGames({ page: 999999999, platforms: [] });
  expect(games).toBeNull();
});

test("get games that are for xbox series x/s", async () => {
  const games = await client.getGames({
    page: 0,
    platforms: [PlatformType.MS_XBOX_XS],
  });
  expect(games.length).toBeGreaterThan(0);
  let includes = false;
  games[0].Platforms.forEach((p) => {
    if (p.id === 2) {
      includes = true;
    }
  });
  expect(includes).toBeTruthy();
});

test("get games that are for pc", async () => {
  const games = await client.getGames({
    page: 0,
    platforms: [PlatformType.PC],
  });
  expect(games.length).toBeGreaterThan(0);
  let includes = false;
  games[0].Platforms.forEach((p) => {
    if (p.id === 27) {
      includes = true;
    }
  });
  expect(includes).toBeTruthy();
});

test("get games that are for ps4", async () => {
  const games = await client.getGames({
    page: 0,
    platforms: [PlatformType.SONY_PLAYSTATION_4],
  });
  expect(games.length).toBeGreaterThan(0);
  let includes = false;
  games[0].Platforms.forEach((p) => {
    if (p.id === 6) {
      includes = true;
    }
  });
  expect(includes).toBeTruthy();
});

test("get games that are for xbox one", async () => {
  const games = await client.getGames({
    page: 0,
    platforms: [PlatformType.MS_XBOX_ONE],
  });
  expect(games.length).toBeGreaterThan(0);
  let includes = false;
  games[0].Platforms.forEach((p) => {
    if (p.id === 7) {
      includes = true;
    }
  });
  expect(includes).toBeTruthy();
});

test("get games that are for ps5", async () => {
  const games = await client.getGames({
    page: 0,
    platforms: [PlatformType.SONY_PLAYSTATION_5],
  });
  expect(games.length).toBeGreaterThan(0);
  let includes = false;
  games[0].Platforms.forEach((p) => {
    if (p.id === 3) {
      includes = true;
    }
  });
  expect(includes).toBeTruthy();
});

test("get a specific game by its ID", async () => {
  if (firstGameId) {
    const game = await client.getGameById(firstGameId);
    expect(game).not.toBeNull();
    expect(game.id).toEqual(firstGameId);
  } else {
    fail("Game ID was invalid!");
  }
});

test("getting a game by an invalid ID should fail gracefully", async () => {
  const game = await client.getGameById(9999999999);
  expect(game).toBeNull();
});
