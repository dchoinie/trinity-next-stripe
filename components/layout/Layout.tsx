import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

type Props = {
  children: ReactNode
  title?: string
}

const Layout = ({
  children,
  title = 'Trinity Evangelical Lutheran Church',
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
