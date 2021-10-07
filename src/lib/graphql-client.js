import { GraphQLClient } from 'graphql-request';
const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT;

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
