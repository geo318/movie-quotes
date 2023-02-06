import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { axiosInstance } from './axios';

const echo = new Echo({
  broadcaster: 'pusher',
  key: '1b12e92b72895d9120f9',
  cluster: 'eu',
  encrypted: true,
  forceTLS: true,
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

export default echo;
