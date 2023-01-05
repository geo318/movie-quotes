import { Layout } from 'components';
import { useFooter } from './useFooter';

const Footer = () => {
  const { t } = useFooter();
  return (
    <div className='flex items-center h-7 md:h-12 text-[#DDCCAA] text-[.5rem] md:text-base bg-gradient-to-b from-[#181623] via-[#191725] to-[#0D0B14]'>
      <Layout background={false}>
        © 2022 movie quotes. {t('allRightsReserved')}
      </Layout>
    </div>
  );
};

export default Footer;
