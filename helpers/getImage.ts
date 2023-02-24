export const getImage = (path: string): string => {
  return path?.includes('google')
    ? path
    : `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;
};
