import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    let logo = siteConfig.themeConfig.logo;
    console.log(logo)
    return (
        <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <img src={typeof logo === 'string' ? logo : undefined} style={{width: 280, borderRadius: '50%'}}/>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                {/*<div className={styles.buttons}>*/}
                {/*    <Link*/}
                {/*        className="button button--secondary button--lg"*/}
                {/*        to="/blog">*/}
                {/*        Let's Start*/}
                {/*    </Link>*/}
                {/*    <Link*/}
                {/*        className="button button--secondary button--lg"*/}
                {/*        to="/blog">*/}
                {/*        Docusaurus Tutorial - 5min ⏱️*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
