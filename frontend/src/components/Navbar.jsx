import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className='shadow-sm navbar navbar-expand-lg navbar-light bg-white'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          {t('Navbar.title')}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
