import React from 'react'
import Layout from '../layout/Layout'
import CV from "../../assets/Resume.pdf"

const Resume = () => {
    return (
        <Layout>
            <iframe src={CV} title="Resume" style={{ width: '100%', height: '600px' }} />
        </Layout>
    );
}

export default Resume