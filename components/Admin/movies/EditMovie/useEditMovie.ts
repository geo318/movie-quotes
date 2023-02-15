import { useRouter } from 'next/router';
import { deleteMovie } from 'services';

export const useEditMovie = () => {
  const router = useRouter();
  const id = router.query.id;
  const path = router.asPath;

  const handleDelete = async () => {
    try {
      if (!id) return;
      console.log(parseInt(`${id}`));
      await deleteMovie(parseInt(`${id}`));
    } catch (e) {
      console.log(e);
    }
  };
  return { id, path, handleDelete };
};
