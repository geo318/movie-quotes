import {
  useActiveQuery,
  useAuthUser,
  useGetUser,
  useScreenWidth,
  useZod,
} from 'hooks';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUser } from 'services';
import { authActions } from 'store';
import { profileActions } from 'store/profileSlice';
import { ProfileSubmitProps, RootState, User } from 'types';

export const useProfile = () => {
  const { refetch, isLoading } = useGetUser();
  const isMobile = useScreenWidth();
  const { isActive } = useActiveQuery();
  const { t } = useTranslation('shared');
  const user = useAuthUser();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.profile.active);
  const { ProfileSchema: schema } = useZod();

  const setFormState = (state?: ProfileSubmitProps) => {
    dispatch(profileActions.setFormPassive());
    if (!state) {
      dispatch(profileActions.clearForm());
      return;
    }
    dispatch(profileActions.editInput(state));
  };

  const onSubmit = async (data: Partial<User>) => {
    try {
      await updateUser(data);
      dispatch(profileActions.setFormPassive());
      refetch();
    } catch (e: any) {
      e.message === 'Request failed with status code 422'
        ? dispatch(authActions.setFormError(e?.response?.data?.errors))
        : dispatch(
            authActions.setFormError({
              name: 'quote_title_ka',
              error: 'something wrong',
            })
          );
    }
  };

  const router = useRouter();

  const profileNavigationKeys = [
    'emails',
    'password',
    'add-new-email',
    'submit',
  ] as const;

  const isActiveProfile = profileNavigationKeys.some((key) => isActive(key));

  return {
    profileNavigationKeys,
    isActiveProfile,
    setFormState,
    isActive,
    schema,
    formState,
    onSubmit,
    refetch,
    isMobile,
    isLoading,
    user,
    t,
  };
};
