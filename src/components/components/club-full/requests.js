import { client } from "../../layouts/layout-base/layout-base";

import * as queries from "./queries";

/**
 * Fetches a club resource by id and returns it
 *
 * @param {string} id
 */
export async function fetchClub(id) {
  try {
    const { data } = await client.query({
      fetchPolicy: "no-cache",
      query: queries.GET_CLUB,
      variables: { id }
    });

    return data.club;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 *
 * @param {string} id
 */
export async function joinClub(id) {
  try {
    const { data } = await client.mutate({
      mutation: queries.JOIN_CLUB,
      variables: { id }
    });

    return data.joinClub;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 *
 * @param {object} club
 */
export async function updateClub(club) {
  const { events, location, members, ...rest } = club;

  try {
    const { data } = await client.mutate({
      fetchPolicy: "no-cache",
      mutation: queries.EDIT_CLUB,
      variables: { ...location, ...rest }
    });

    return data.updateClub;
  } catch (error) {
    throw new Error(error.message);
  }
}
