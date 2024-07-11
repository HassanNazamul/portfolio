import React from 'react'
import Layout from '../layout/Layout'
import CV from "../../assets/Resume.pdf"

const Resume = () => {
    return (
        <Layout>
            <iframe src={CV} title="Resume" style={{ width: '100%', height: '600px' }} />

            {/* <a href={CV} download className="btn">
                Download CV
            </a> */}

        </Layout>
    );
}

export default Resume