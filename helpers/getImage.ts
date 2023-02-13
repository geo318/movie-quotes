export const getImage = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
