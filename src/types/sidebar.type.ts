import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};

export type TUser = {
  userId: string;
  role: string;
  iat: string;
  exp: string;
};

export type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

export type TInputFormProps = {
  type: string;
  name: string;
  label?: string;
};


export type TFormConfig = {
  defaultValues ?: Record<string,any>
}