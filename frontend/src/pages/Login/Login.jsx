import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

import avatar from '../../assets/avatar.jpg';

import styles from './Login.module.scss';

import { loginApi } from '../../api/auth';

import { AppContext } from '../../context/AppContext';

const VALIDATION_SCHEMA = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

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
      try {
        const data = await loginApi(values);
        login(data);
        navigate('/');
      } catch (e) {
        const { response } = e;
        const message = response.status === 401 ? 'Неверные данные' : e.message;
        toast.error(message);
        formik.setErrors({
          username: 'Неверный ник',
          password: 'Неверный пароль',
        });
      }
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
                value={formik.values.username}
                name="username"
                id="username"
                autoComplete="username"
                required
                placeholder="Ваш ник"
                isInvalid={!!formik.errors.username}
              />
              <Form.Label htmlFor="username">Ваш ник</Form.Label>
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
                isInvalid={!!formik.errors.password}
                placeholder="Пароль"
              />
              <Form.Label htmlFor="password">Пароль</Form.Label>
            </Form.Group>
            <Button
              type="submit"
              variant="outline-primary"
              className="w-100 mb-3"
              disabled={formik.isSubmitting}
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
