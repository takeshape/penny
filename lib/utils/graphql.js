import { GraphQLClient } from 'graphql-request';

export const createGraphqlRequest = (url, getAccessToken, query, payload) => {
  return async () => {
    try {
      const accessToken = await getAccessToken();
      const client = new GraphQLClient(url);
      client.setHeader('Authorization', `Bearer ${accessToken}`);
      const data = await client.request(query, payload);

      if (data.errors) {
        throw data.errors;
      }

      return data;
    } catch (e) {
      if (Array.isArray(e)) {
        throw e;
      }

      throw [e];
    }
  };
};
