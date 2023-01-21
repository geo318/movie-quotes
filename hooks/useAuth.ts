import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUser } from 'services';

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getUser();
        setUser(response.data.user);
      } catch (e) {
        if (router.pathname === '/admin') {
          router.push('/login');
        }
      }
    })();
  }, [router]);

  return user;
};
