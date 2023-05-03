export type InactiveCustomer = {
  id: string;
  email: string;
};

export type SigninError = {
  code: string;
} & Record<string, string>;
