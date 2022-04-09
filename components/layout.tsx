import React, { ReactNode } from "react";
import Meta from "./meta";

type Props = {
    children?: ReactNode
    title?: string
  }
  
export default function Layout({ children, title = 'DDecoene' }: Props ) {
  return (
    <>
      <Meta title={title}/>
      <main>{children}</main>
      </>
  )
}