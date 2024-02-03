import { Domain } from "../../types/schema";

/**
 * @dev API
 * @param context object containing the response and request object
 * @param bind init function for database wrapper methods
 */
export const apiHandler = async (context: any, bind: Function) => {
  // Implement your function handler logic for API here

  let { request, response } = context;

  // request contains query object. To access user query params use
  let { user } = request.query;

  const domainHelper = bind(Domain);

  return domainHelper.findOne({ owner: user.toLowerCase() });
};
