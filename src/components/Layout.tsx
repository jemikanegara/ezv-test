import { ReactElement } from "react";
import Header from "./Header";
import LoadingCheck from "./LoadingCheck";

export interface LayoutProps {
  children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <LoadingCheck>
        {children}
      </LoadingCheck>
    </>
  )
}