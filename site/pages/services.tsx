import React from 'react'
import { NextPage } from 'next'
import moment from 'moment'
import Layout from '../components/layout/Layout'

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

const services: NextPage<{data: any}> = ({ data }) => {
    console.log(data);
    
    return (
        <Layout>
            <div className="max-w-screen-xl mx-auto py-24">
                <ul className="grid grid-cols-3 gap-12">
                    {data.items.map((item: YouTubeVideo) => {
                        return (
                            <li key={item.id} className="flex flex-col">
                                <h5>{item.snippet.title}</h5>
                                <p>
                                    {moment.utc(item.snippet.publishedAt).local().format('MMM Do, YYYY')}
                                </p>
                                <img src={item.snippet.thumbnails.medium.url} alt="" />
                                <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target="_blank" rel="noopener noreferrer">Go to video</a>
                                <iframe width="auto" height="315" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Layout>
    )
}

export default services

