import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import image404 from '../assets/page404.svg';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className='text-center'>
      <img className='img-fluid h-25' src={image404} alt={t('NotFound.imgAlt')} />
      <h1 className='h4 text-muted'>{t('NotFound.title')}</h1>
      <p className='text-muted'>
        {t('NotFound.description')} <NavLink to='/'>{t('NotFound.link')}</NavLink>
      </p>
    </div>
  );
};

export default NotFound;
