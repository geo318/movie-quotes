import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { useEffect } from 'react';
import { axiosInstance } from '../services/axios';

declare global {
  interface Window {
    echo: Echo;
  }
}
export const useEcho = () => {
  useEffect(() => {
    if (typeof window !== 'undefined')
      window.echo = new Echo({
        broadcaster: 'pusher',
        key: '2e71e42be2a39d6063d6',
        cluster: 'eu',
        Pusher,
        authorizer: (channel: { name: string }) => {
          return {
            authorize: (socketId: string, callback: Function) => {
              axiosInstance
                .post('/api/broadcasting/auth', {
                  socket_id: socketId,
                  channel_name: channel.name,
                })
                .then((response) => {
                  callback(null, response.data);
                })
                .catch((error) => {
                  callback(error);
                });
            },
          };
        },
      });
  }, []);
};
// export default useEcho;
