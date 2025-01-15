import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className='text-center'>
      <img className='img-fluid h-25' src='/assets/notfound404.svg' alt={t('NotFound.imgAlt')} />

      <h1 className='h4 text-muted'>{t('NotFound.title')}</h1>
      <p className='text-muted'>
        {t('NotFound.description')} <NavLink to='/'>{t('NotFound.link')}</NavLink>
      </p>
    </div>
  );
};

export default NotFound;
