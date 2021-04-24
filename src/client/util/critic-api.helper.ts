import axios, { AxiosResponse } from "axios";
import { IRequestOptions } from "../interfaces/request-options.interface";
import { ErrorHandler } from "./error-handler";
import { IGameSummary } from "../interfaces";
import { IGetGamesOptions } from "../interfaces/get-games-options.interface";
import { PlatformType } from "../enums/platform-type";
import { IGameDetails } from "../interfaces/game-details.interface";

/**
 * Handles various generic API calls to the OpenCritic API.
 */
export class CriticAPIHelper {
  /**
   * Defines the API URL that we will use to communicate with the Open Critic API servers.
   * @private
   */
  private static readonly GATEWAY_API_URL: string =
    "https://api.opencritic.com/api/game";

  /**
   * OpenCritic automatically only returns 20 results by default when searching so this is the value we will use for general gets.
   * @private
   */
  private static readonly CONSTANT_PAGE_SIZE: number = 20;

  /**
   * Returns an array of the game with the given options.
   */
  public static async getAllGamesWithOptions(
    getOptions: IGetGamesOptions
  ): Promise<Array<IGameSummary>> {
    try {
      const requestOptions = {
        fullUrl:
          CriticAPIHelper.GATEWAY_API_URL +
          "?skip=" +
          (
            (getOptions.page ? getOptions.page : 0) *
            CriticAPIHelper.CONSTANT_PAGE_SIZE
          ).toString() +
          CriticAPIHelper._getPlatformsQueryString(getOptions.platforms),
      };
      const response = await CriticAPIHelper._getRequest(requestOptions);
      if (response && response.data) {
        return response.data;
      } else {
        return [];
      }
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }

  /**
   * Given a Game ID, will attempt to return its details.
   * @param id The ID of the game we want details for.
   */
  public static async getGameById(id: number): Promise<IGameDetails> {
    try {
      const requestOptions = {
        fullUrl: CriticAPIHelper.GATEWAY_API_URL + "/" + id.toString(),
      };
      const response = await CriticAPIHelper._getRequest(requestOptions);
      if (response && response.data) {
        return response.data;
      } else {
        throw new Error(`Game with ID [${id}] could not be found!`);
      }
    } catch (error) {
      return ErrorHandler.handle(error);
    }
  }

  /**
   * Perform a GET request with the given options.
   */
  private static async _getRequest(
    options: IRequestOptions
  ): Promise<AxiosResponse> {
    return axios.get(options.fullUrl, {
      ...(options.headers && { headers: options.headers }),
    });
  }

  /**
   * Builds an HTTP Query String for the platforms you want to select.
   * @param platforms The array of platforms you want to include in your query.
   * @private
   */
  private static _getPlatformsQueryString(platforms: PlatformType[]): string {
    if (platforms && platforms.length > 0) {
      let queryString = "&platforms=";
      platforms.forEach((type) => {
        queryString += type.toString();
      });
      return queryString;
    } else {
      return "";
    }
  }
}
