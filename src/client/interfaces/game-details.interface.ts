import { GameTier } from "../enums";
import { IPlatform } from "./platform.interface";

export interface IGameDetails {
  /**
   * IDK what this is for yet.
   */
  reviewSummary: {
    completed: boolean;
  };

  /**
   * This is a link to a screenshot but IDK what its for.
   */
  mastheadScreenshot: {
    fullRes: string;
    thumbnail: string;
  };

  /**
   * This is a link to a screenshot but IDK what its for.
   */
  bannerScreenshot: {
    fullRes: string;
  };

  /**
   * Unsure what this is used for yet.
   */
  mainChannel: any;

  /**
   * Looks to be the ESRB Rating symbol.
   */
  Rating: {
    value: string;
  };

  /**
   * IDK what this is for yet.
   */
  newsSearchEnabled: true;

  /**
   * IDK what this is for yet.
   */
  type: string;

  /**
   * IDK what this is for yet.
   */
  Skus: any[];

  /**
   * This is a scoring value.
   */
  percentRecommended: number;

  /**
   * The number of reviews that are being factored into the score on this game.
   */
  numReviews: number;

  /**
   * IDK how this is different from the above or what defines a top critic.
   */
  numTopCriticReviews: number;

  /**
   * The number of reviews written by users -- but I think this might be deprecated.
   */
  numUserReviews: number;

  /**
   * The Median Score.
   */
  medianScore: number;

  /**
   * The average of all the scores.
   */
  averageScore: number;

  /**
   * The best score given by a top critic.
   */
  topCriticScore: number;

  /**
   * IDK what this is for.
   */
  percentile: number;

  /**
   * The tier of this game.
   */
  tier: GameTier;

  /**
   * Whether or not this game has a loot box system.
   */
  hasLootBoxes: boolean;

  /**
   * Im unsure of the specifics on what classifies something as a major title.
   */
  isMajorTitle: boolean;

  /**
   * The official name of the game.
   */
  name: string;

  /**
   * An array of screenshots for this game.
   */
  screenshots: Array<{
    fullRes: string;
    thumbnail: string;
  }>;

  /**
   * An array of trailer information for this game.
   */
  trailers: any[];

  /**
   * The companies responsible for this game.
   */
  Companies: Array<{
    name: string;
    type: string;
  }>;

  /**
   * The platforms this game is available on.
   */
  Platforms: IPlatform[];

  /**
   * The genres associated with this game title.
   */
  Genres: Array<{
    id: number;
    name: string;
  }>;

  /**
   * The primary key ID for this game.
   */
  id: number;

  /**
   * The date this game was first released.
   */
  firstReleaseDate: Date;

  /**
   * Affiliates that OpenCritic uses to get some extra revenue.
   */
  Affiliates: Array<{
    externalUrl: string;
    name: string;
  }>;

  /**
   * The date this record was added to OpenCritic's DB.
   */
  createdAt: Date;

  /**
   * The last time this record was updated in the DB.
   */
  updatedAt: Date;

  /**
   * A description of the game.
   */
  description: string;

  /**
   * This might have been part of a refactor because this data is repeated.
   */
  monetizationFeatures: {
    hasLootBoxes: boolean;
  };

  /**
   * The date this game was first reviewed.
   */
  firstReviewDate: Date;

  /**
   * The last review for this game.
   */
  latestReviewDate: Date;
}
