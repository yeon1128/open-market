const limitLength = (value: string, maxLength: number) => {
  value.length > maxLength && (value = value.substring(0, maxLength));
  return value;
};

export default limitLength;
