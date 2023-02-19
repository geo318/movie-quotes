import { useRouter } from 'next/router';

export const useAddButton = ({ text = '' }) => {
  const router = useRouter();
  const isActive = (query: string) => router.query.hasOwnProperty(query);
  const query = text.toLowerCase().replace(' ', '-');
  return { isActive, query };
};
