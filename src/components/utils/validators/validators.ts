export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
  if (value) {
    return undefined;
  }
  return "Required";
};

export const maxLength = (max: number): FieldValidatorType => (values) => {
  if (values && values.length > max) {
    return `Max symbols is ${max}`;
  }
  return undefined;
};
export const minLength = (min: number): FieldValidatorType => (values) => {
  if (values && values.length < min) {
    return `Min symbols is ${min}`;
  }
  return undefined;
};
