import { Button, Divider } from 'components';
import { useDialog } from './useDialog';

const Dialog = ({ close }: { close: () => void }) => {
  const { t } = useDialog();
  return (
    <>
      <div
        className='bg-app-gradient-dark opacity-50 backdrop-blur-sm fixed inset-0 z-40'
        onClick={() => close()}
      />
      <div className='fixed z-50 bg-app-gradient inset-x-9 top-32 text-center rounded-ten'>
        <div className='bg-app-gradient-dialog rounded-ten'>
          <p className='px-16 pt-16 pb-10 text-base'>
            Are you sure to make changes ?
          </p>
          <Divider className='border-opacity-10' />
          <div className='flex pt-5 pb-4 px-5'>
            <div className='px-2 py-2 cursor-pointer' onClick={() => close()}>
              Cancel
            </div>
            <Button
              text='Confirm'
              style='buttonRed'
              className='!px-4 ml-auto'
              onClick={() => close()}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dialog;
