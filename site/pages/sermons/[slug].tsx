import client from '../../lib/sanity'
import groq from 'groq'

interface SermonProps {
	title: string,
	date: string,
	sermonPDF: any,
}

const sermon = (props: SermonProps) => {
	const { title, date, sermonPDF } = props
	return (
		<div>
			<p>
				{title}
			</p>
			<p>
				{date}
			</p>
		</div>
	)
}

const query = groq`*[_type == "sermons" && slug.current == $slug][0]{
    title,
    date,
    "sermonPDF":sermon.asset->url
  }`

sermon.getInitialProps = async function(context: any) {
    const { slug = "" } = context.query
    return await client.fetch(query, { slug })
  }

export default sermon