import { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import OurChurch from '../components/OurChurch'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Trinity Evangelical Lutheran Church">
      <Hero />
      <OurChurch />
    </Layout>
  )
}

export default IndexPage
