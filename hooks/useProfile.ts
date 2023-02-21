import { useAuthUser, useGetUser, useLang, useZod } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateUser } from 'services';
import { authActions } from 'store';
import { profileActions } from 'store/profileSlice';
import { ProfileSubmitProps, RootState, User } from 'types';

export const useProfile = () => {
  const { refetch } = useGetUser();
  const { lang } = useLang();
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
    console.log(data);
    try {
      await updateUser(data);
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

  return {
    schema,
    setFormState,
    formState,
    onSubmit,
    refetch,
    lang,
    user,
    t,
  };
};
