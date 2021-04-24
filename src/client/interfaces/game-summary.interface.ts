import { IBannerScreenshot } from "./banner-screenshot.interface";
import { GameTier } from "../enums";
import { IPlatform } from "./platform.interface";

/**
 * Represents a game stored in the OpenCritic database.
 */
export interface IGameSummary {
  /**
   * The primary key ID for this game.
   */
  id: number;

  /**
   * Metadata about the banner image for the game.
   */
  bannerScreenshot: IBannerScreenshot;

  /**
   * The platforms that this game is on.
   */
  Platforms: IPlatform[];

  /**
   * The User Score
   */
  percentRecommended: number;

  /**
   * The number of reviews this game has to establish its score.
   */
  numReviews: number;

  /**
   * The critic score for this game.
   */
  topCriticScore: number;

  /**
   * The tier ranking that this game has.
   */
  tier: GameTier;

  /**
   * The full name of the game.
   */
  name: string;

  /**
   * The date this game was first released.
   */
  firstReleaseDate: Date;

  /**
   * The URL to this game's page on OpenCritic.
   */
  url: string;
}
