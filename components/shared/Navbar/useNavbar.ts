import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { authActions, InitialAuthState } from 'store';

export const useNavbar = () => {
  const { t } = useTranslation('shared');
  return { t };
};
