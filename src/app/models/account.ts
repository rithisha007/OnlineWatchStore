export interface Account {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile?: string; // Make the 'mobile' property optional
}
