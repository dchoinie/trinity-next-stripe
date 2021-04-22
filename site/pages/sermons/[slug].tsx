import Client from '../../lib/sanity'
import groq from 'groq'
import Layout from '../../components/layout/Layout'

const Sermon = (props: any) => {
    const { title, date, sermonPDF } = props
    return (
        <Layout>
            <div className="mt-24 max-w-screen-xl mx-auto">
                <article>
                    {title}
                    {date}
                </article>
                <a href={`${sermonPDF}?dl=`}>Sermon</a>
            </div>
        </Layout>
    )
}

const query = groq`*[_type == "sermons" && slug.current == $slug][0]{
    title,
    date,
    "sermonPDF":sermon.asset->url
  }`

Sermon.getInitialProps = async function(context: any) {
    const { slug = "" } = context.query
    return await Client.fetch(query, { slug })
  }

export default Sermon