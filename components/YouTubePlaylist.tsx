import React from 'react'

export interface YouTubeVideo {
    id: string;
    key: string;
    medium: any;
    snippet: any;
}

const YOUTUBE_PLAYLIST_ITEMS_API= 'https://www.googleapis.com/youtube/v3/playlistItems'

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PL7X8q67S09NqHTVrqomRdOSO4wGpPV6_0&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

const YouTubePlaylist = ({ data }) => {
    return (
        <div>
            <ul>
                {data.items.map((item: YouTubeVideo) => {
                    const { id, snippet } = item;
                    const { title, thumbnails = {}, resourceId } = snippet;
                    const { medium = {} } = thumbnails;
                    <li key={id}>
                        <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
                            <p>
                                <img src={medium.url} width={medium.width} height={medium.height} alt=""/>
                            </p>
                            <h3>
                                {title}
                            </h3>
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default YouTubePlaylist

