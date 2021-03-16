import { NextPage } from 'next'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Hero />
    </Layout>
  )
}

export default IndexPage
