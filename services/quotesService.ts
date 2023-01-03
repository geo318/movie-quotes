import instance from './axios';

export const getQuotes = () => {
  return instance({ url: 'quotes' });
};
