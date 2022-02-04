import * as Yup from 'yup';

export const LoginFormValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string()
      .email('Wrong email format')
      .required('This field is required'),
    password: Yup.string().required('This field is required'),
  });
};
