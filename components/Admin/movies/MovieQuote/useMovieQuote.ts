import { useActiveQuery } from 'hooks';
import { deleteQuote } from 'services';

export const useMovieQuote = (refetch: () => void) => {
  const { isActive } = useActiveQuery();
  const handleDelete = async (id?: number) => {
    try {
      if (id) {
        await deleteQuote(id);
        refetch();
        return;
      }
      throw new Error('something went wrong');
    } catch (e) {
      return e;
    }
  };
  return { handleDelete, isActive };
};
