import { Formik, Form, Field } from 'formik';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <Formik>
      <Form className='col-12 col-md-6 mt-3 mt-mb-0'>
        <h1 className='text-center mb-4'>{t('Login.title')}</h1>

        <div className='form-floating mb-3'>
          <Field className='form-control' type='text' name='username' autoComplete='username' required autoFocus placeholder={t('Login.placeholderUsername')} id='username' />
          <label htmlFor='username'>{t('Login.labelUsername')}</label>
        </div>
        <div className='form-floating mb-4'>
          <Field className='form-control' type='password' name='password' autoComplete='current-password' required autoFocus placeholder={t('Login.placeholderPassword')} id='password' />
          <label className='form-label' htmlFor='password'>
            {t('Login.labelPassword')}
          </label>
        </div>

        <div className='invalid-tooltip'>{t('Login.errorInvalid')}</div>

        <button className='w-100 mb-3 btn btn-outline-primary' type='submit'>
          {t('Login.buttonSubmit')}
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
