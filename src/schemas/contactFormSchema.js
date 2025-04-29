import * as yup from 'yup';

const contactFormSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(15, 'Name must be at most 15 characters')
    .required('Name is required'),

  number: yup
    .string()
    .matches(
      /^\+?\d{7,13}$/,
      'Phone number must be 7-13 digits and can start with +'
    )
    .required('Phone number is required'),
});

export default contactFormSchema;
