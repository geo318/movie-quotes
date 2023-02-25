import { Button, Divider } from 'components';
import { FC } from 'react';
import { DialogProps } from './type';
import { useDialog } from './useDialog';

const Dialog: FC<DialogProps> = ({
  toggleDialog,
  handleFormError,
  trigger,
  handleTrigger,
  open,
}) => {
  const { t } = useDialog({
    toggleDialog,
    handleFormError,
    trigger,
    handleTrigger,
    open,
  });

  return (
    <>
      {open && (
        <>
          <div
            className='bg-app-gradient-dark opacity-50 backdrop-blur-sm fixed inset-0 z-40'
            onClick={() => toggleDialog(false)}
          />
          <div className='fixed z-50 bg-app-gradient inset-x-9 top-32 text-center rounded-ten'>
            <div className='bg-app-gradient-dialog rounded-ten'>
              <p className='px-16 pt-16 pb-10 text-base'>{t('areUSure')}</p>
              <Divider className='border-opacity-10' />
              <div className='flex pt-5 pb-4 px-5'>
                <div
                  className='px-2 py-2 cursor-pointer'
                  onClick={() => toggleDialog(false)}
                >
                  {t('cancel')}
                </div>
                <Button
                  text={t('confirm')}
                  style='buttonRed'
                  className='!px-4 ml-auto'
                  onClick={() => toggleDialog(false)}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Dialog;
