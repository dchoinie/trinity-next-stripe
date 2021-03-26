import { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import OurChurch from '../components/OurChurch'
import ServiceTimes from '../components/ServiceTimes'
import Support from '../components/Support'
import Events from '../components/Events'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Trinity Evangelical Lutheran Church">
      <Hero />
      <OurChurch />
      <ServiceTimes />
      <Support />
      <Events />
    </Layout>
  )
}

export default IndexPage
