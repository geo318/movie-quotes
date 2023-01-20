export interface RegisterProps {
  username: string;
  email: string;
  password: string;
  repeat_password: string;
}

export interface LoginProps {
  username: string;
  password: string;
  remember_me: string;
}

export interface EmailProps {
  email: string;
}

export interface ResetPasswordProps {
  email: string;
  token: string;
  password: string;
  repeat_password: string;
}

export interface FormSubmitProps
  extends RegisterProps,
    LoginProps,
    EmailProps,
    ResetPasswordProps {}

export type FormSubmitUnionProps =
  | RegisterProps
  | LoginProps
  | EmailProps
  | ResetPasswordProps;
