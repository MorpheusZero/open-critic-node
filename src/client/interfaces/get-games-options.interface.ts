import { PlatformType } from "../enums/platform-type";

/**
 * These are the possible options that a user can pass when attempting to retrieve games.
 */
export interface IGetGamesOptions {
  /**
   * Which page of data you want to retrieve.
   * DEFAULT: 0
   */
  page: number;

  /**
   * Which platforms you want to return with your results.
   * DEFAULT: ALL
   */
  platforms: PlatformType[];
}
