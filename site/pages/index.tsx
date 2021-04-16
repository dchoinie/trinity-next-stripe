import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import OurChurch from '../components/OurChurch'
import ServiceTimes from '../components/ServiceTimes'
import Support from '../components/Support'
import Events from '../components/Events'
import fetch from 'node-fetch';

export const getServerSideProps = async () => {
  const result = await fetch(
      `https://beta.ourmanna.com/api/v1/get/?format=json&order=random`
    ).then((response) => response.json());

  return {
    props: {
      data: result,
    },
  }
}

const IndexPage: NextPage<{data: any}> = ({data}) => {  
  return (
    <>
    <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Layout title="Trinity Evangelical Lutheran Church" verseData={data}>
      <Hero />
      <OurChurch />
      <ServiceTimes />
      <Support />
      <Events />
    </Layout>
    </>
  )
}

export default IndexPage
