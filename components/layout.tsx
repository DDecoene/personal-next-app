import { VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Meta, Footer, Nav } from ".";


type Props = {
  children?: ReactNode
  title?: string
}

export function Layout({ children, title = '' }: Props) {
  return (
    <>
      <Meta title={'DDecoene - ' + title} />
      <header><Nav /></header>
      <main>{children}</main>
      <Footer />
    </>
  )
}