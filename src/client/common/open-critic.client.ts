import { IGameDetails, IGameSummary } from "../interfaces";
import { ErrorHandler } from "../util/error-handler";
import { CriticAPIHelper } from "../util/critic-api.helper";
import { IGetGamesOptions } from "../interfaces/get-games-options.interface";

/**
 * Handles and manages all connections to the OpenCritic API.
 */
export class OpenCriticClient {
  constructor() {}

  /**
   * Returns the games based on the options you provided.
   * @param options The options object to configure your GET request.
   */
  public async getGames(
    options: IGetGamesOptions
  ): Promise<Array<IGameSummary>> {
    try {
      return CriticAPIHelper.getAllGamesWithOptions(options);
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }

  /**
   * Returns a game by the specified ID.
   * @param id The ID of the game you want to retrieve.
   */
  public async getGameById(id: number): Promise<IGameDetails> {
    try {
      return CriticAPIHelper.getGameById(id);
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }
}
