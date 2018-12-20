import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Siderbar from './Siderbar';
import './style/layout.scss';

export default ({ 
    title, 
    children, 
    userStore, 
    settingStore 
}) => (
    <div>
        <Head>
            <title>
                { title || '' }
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.10.3/antd.min.css" />
        </Head>
        <style jsx global>
            {
                `body {

                }`
            }
        </style>
        <div className="app-body">
            <Siderbar menus={settingStore.menus} />
            <div className="app-container">
                <Header userStore={userStore} />
                { children }
            </div>
        </div>
    </div>
);
