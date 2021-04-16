import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/layout/Layout'

const contactSuccess: NextPage = () => {
    return (
        <Layout>
            <div className="mt-24">
                <p>
                    Thanks for submitting!
                </p>
            </div>
        </Layout>
    )
}

export default contactSuccess
