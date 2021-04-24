/**
 * Used to gracefully handle errors in a standard way.
 */
export class ErrorHandler {
  public static handle(error: any): any {
    if (error.response) {
      if (process.env.NODE_ENV !== "test") {
        console.error(`[${error.response.status}] - An Error Occurred!`);
        console.error(JSON.stringify(error.response.data));
      }
    } else if (error.request) {
      if (process.env.NODE_ENV !== "test") {
        console.error(error.request);
      }
    } else {
      if (process.env.NODE_ENV !== "test") {
        console.error("[ ERROR ]", error.message);
      }
    }
    return null;
  }
}
