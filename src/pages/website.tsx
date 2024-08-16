import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css'

export default function MyReactPage() {
    return (
        <Layout title={`网站导航`}>
            <section className={styles.container}>
                <h1 style={{ textAlign: 'center' }}>网站导航</h1>

                <div id="example"> </div>
                <script type="text/babel"></script>
                
               

            </section>
        </Layout>
    );
}


function App() {
    return <h1>Hello, React!</h1>;
}