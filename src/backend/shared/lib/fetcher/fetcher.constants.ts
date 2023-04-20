export const FETCH_CONSTANTS = {
  corsFetchOptions: {
    mode: 'cors' as RequestMode,
    credentials: 'include' as RequestCredentials
  },
  cacheHeaders: {
    'Cache-Control': 'private, max-age=3600'
  },
  acceptJsonHeaders: {
    Accept: 'application/json'
  },
  contentTypeJsonHeaders: {
    'Content-Type': 'application/json'
  }
}
