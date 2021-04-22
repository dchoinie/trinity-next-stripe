import Client from '../../lib/sanity'
import Layout from '../../components/layout/Layout'

const Sermon = (props: any) => {
    return (
        <Layout>
            <article>
                {props.slug.current}
            </article>
        </Layout>
    )
}

Sermon.getInitialProps = async function(context: any) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.query
    return await Client.fetch(`
      *[_type == "sermon" && slug.current == $slug][0]
    `, { slug })
  }

export default Sermon