import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
    title: string;
    path: string,
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '🏫 知识库',
        path: '/docs/intro',
        description: (
            <>
                前后端学习笔记
            </>
        ),
    },
    {
        title: '📝 博客',
        path: '/blog',
        description: (
            <>
                个人积累，杂谈
            </>
        ),
    },
    {
        title: '🥷 关于',
        path: '/about',
        description: (
            <>
                ✌️Software Engineer✌️
            </>
        ),
    },
];

function Feature({title, path, description}: FeatureItem) {
    return (
        // <div className={clsx('col col--4')}>
        <Link to={path} className={clsx('col col--4')}>
            <div className='card shadow--md' style={{height: '100%'}}>
                <div className="card__header">
                    <h3>{title}</h3>
                </div>
                <div className="card__body">
                    <p>{description}</p>
                </div>
                {/*<div className="card__footer">*/}
                {/*    <Link to={path} className="button button--primary button--block">*/}
                {/*        GO ➡️*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </Link>
        // </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
