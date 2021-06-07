import React from 'react'
import Layout from '../../components/layout/Layout'
import groq from 'groq'
import client from '../../lib/sanity'

const sermons = (props: any) => {
    const { sermons = [] } = props
    console.log(sermons);
    
    return (
        <Layout>
            <div className="mt-24"></div>
        </Layout>
    )
}

sermons.getInitialProps = async () => ({
    sermon: await client.fetch(groq`
      *[_type == "sermon"]
    `)
})

export default sermons
