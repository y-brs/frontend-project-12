import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className='container-fluid h-100'>
      <div className='row justify-content-center align-content-center h-100'>
        <div className='col-12 col-md-8 col-xxl-6'>
          <div className='card shadow-sm'>
            <div className='card-body row p-5'>
              <div className='col-12 col-md-6 d-flex align-items-center justify-content-center'>
                <img className='rounded-circle' src='/assets/login.jpg' alt={t('Login.imageAlt')} />
              </div>

              <LoginForm />
            </div>

            <div className='card-footer p-4'>
              <div className='text-center'>
                <span>{t('Login.footerText')}</span>{' '}
                <NavLink to='/signup'>{t('Login.footerLink')}</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
