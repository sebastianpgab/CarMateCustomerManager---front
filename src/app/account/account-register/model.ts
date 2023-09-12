export interface User {
  firstName: string;
  lastName: string;
  email: string | null;
  password: string;
  confirmPassword: string;
  nationality: string;
  dateOfBirth: Date;
  roleId: number;
}