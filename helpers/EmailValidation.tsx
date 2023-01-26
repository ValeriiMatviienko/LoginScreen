export function emailValidator(email: any) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email) {
    return "Email can't be empty.";
  }
  if (!emailRegex.test(email)) {
    return 'Ooops! We need a valid email address.';
  }
  return '';
}
