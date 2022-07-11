import React, { FC } from 'react';
import { Field } from 'formik';
import { FormErrorMessage } from './FormErrorMessage';

interface Props {
  name: string;
  placeHolder?: string;
}

export const FormTextAreaField: FC<Props> = ({ name, placeHolder, ...rest }) => {
  return (
    <>
      <Field className="form-control" as="textarea" name={name} id={name} placeHolder={placeHolder} {...rest} />
      <FormErrorMessage name={name} />
    </>
  );
};
