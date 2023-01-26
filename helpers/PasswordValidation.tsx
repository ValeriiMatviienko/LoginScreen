export function passwordValidator(password: any) {
  if (!password) {
    return "Password can't be empty.";
  }
  if (password.length < 7) {
    return 'Password must be at least 7 characters long.';
  }
  if (password.length > 20) {
    return 'Password must be no more than 20 characters long.';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter.';
  }
  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter.';
  }
  if (!/\d/.test(password)) {
    return '';
  }
}
