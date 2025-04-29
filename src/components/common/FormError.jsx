import { ErrorMessage } from 'formik';
import { ErrorText } from './FormError.styled';

const FormError = ({ name }) => (
  <ErrorMessage
    name={name}
    render={message => <ErrorText>{message}</ErrorText>}
  />
);

export default FormError;
