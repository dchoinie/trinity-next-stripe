import { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import OurChurch from '../components/OurChurch'
import ServiceTimes from '../components/ServiceTimes'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Trinity Evangelical Lutheran Church">
      <Hero />
      <OurChurch />
      <ServiceTimes />
    </Layout>
  )
}

export default IndexPage
