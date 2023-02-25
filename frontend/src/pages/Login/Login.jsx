import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Form } from 'react-bootstrap';

import avatar from '../../assets/avatar.jpg';

import styles from './Login.module.scss';

const VALIDATION_SCHEMA = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    enableReinitialize: false,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.login}>
      <div className={`${styles.form} col-12 col-md-6 mt-3 mt-mb-0`}>
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.formContent}>
          <Form onSubmit={formik.handleSubmit}>
            <h1 className="text-center mb-4">Войти</h1>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                onChange={formik.handleChange}
                value={formik.values.login}
                name="login"
                id="login"
                autoComplete="login"
                required
                placeholder="Ваш ник"
              />
              <Form.Label htmlFor="login">Ваш ник</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-4">
              <Form.Control
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                name="password"
                id="password"
                autoComplete="password"
                required
                placeholder="Пароль"
              />
              <Form.Label htmlFor="password">Пароль</Form.Label>
            </Form.Group>
            <Button
              type="submit"
              variant="outline-primary"
              className="w-100 mb-3"
            >
              Войти
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
