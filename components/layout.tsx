import { Box, VStack } from "@chakra-ui/react";
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
      <Box minH={'80vh'}>
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  )
}