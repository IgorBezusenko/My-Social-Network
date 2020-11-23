export const required = (value) => {
  if (value) {
    return undefined;
  }
  return "Required";
};

export const maxLength = (max) => (values) => {
  if (values && values.length > max) {
    return `Max simbols is ${max}`;
  }
  return undefined;
};
export const minLength = (min) => (values) => {
  if (values && values.length < min) {
    return `Min simbols is ${min}`;
  }
  return undefined;
};
