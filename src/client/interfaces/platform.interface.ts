/**
 * Defines the platform that a game can be made for.
 */
export interface IPlatform {
  /**
   * A UUID--could possibly be a legacy property.
   */
  _id: string;

  /**
   * An integer primary key ID.
   */
  id: number;

  /**
   * The full name of the platform.
   */
  name: string;

  /**
   * The friendly UI name of the platform.
   */
  shortName: string;

  /**
   * The URL to an image of what this platform looks like.
   */
  imageSrc: string;

  /**
   * The official release date of this platform.
   */
  releaseDate: Date;

  /**
   * This doesn't seem to be used and might be deprecated but I'm leaving it here just in case.
   */
  displayRelease: string;
}
