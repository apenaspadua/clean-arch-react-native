export const makeApiUrl = (path: string) =>
  `${process.env.REACT_APP_BASE_URL as string}/${path}`
