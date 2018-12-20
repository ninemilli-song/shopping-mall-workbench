import React from 'react';
// import Link from 'next/link';
import { Provider } from 'mobx-react';
import pageWithIntl from '../components/PageWithIntl.js';
// import withAuth from '../util/withAuth';
import './index.scss';

class Index extends React.Component {
    static async getInitialProps({ req }) {
        const isServer = !!req;

        return {
            title: 'Home Page',
            isServer,
        };
    }

    render() {
        return (
            <Provider>
                <div>
                    Hello, First page!
                </div>
            </Provider>
        );
    }
}

export default pageWithIntl(Index);
