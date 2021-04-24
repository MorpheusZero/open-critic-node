/**
 * Various options to include with our requests.
 */
export interface IRequestOptions {
  /**
   * The full URL for the request that we want to make.
   */
  fullUrl: string;

  /**
   * Any headers that we want to include with our request.
   */
  headers?: any;

  /**
   * Any body data that we want to include with our request.
   */
  body?: any;
}
