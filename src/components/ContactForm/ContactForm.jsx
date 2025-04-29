import { Formik } from 'formik';

import { FormError } from 'components';
import contactFormSchema from 'schemas/contactFormSchema';

import {
  FormButton,
  FormWraper,
  InputField,
  InputLabel,
  InputWraper,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ addContact }) => {
  const onFormSubmit = (value, actions) => {
    addContact(value);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={contactFormSchema}
    >
      <FormWraper>
        <InputWraper>
          <InputLabel>
            Name:
            <InputField type="text" name="name" />
            <FormError name="name" />
          </InputLabel>
        </InputWraper>

        <InputWraper>
          <InputLabel>
            Number:
            <InputField type="text" name="number" />
            <FormError name="number" />
          </InputLabel>
        </InputWraper>

        <FormButton type="submit">Add contact</FormButton>
      </FormWraper>
    </Formik>
  );
};

export default ContactForm;
