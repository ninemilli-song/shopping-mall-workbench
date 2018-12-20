import React from 'react';
import Head from 'next/head';
import classnames from 'classnames';
import Header from './Header';
import SiderbarFirst from './SiderbarFirst';
import './style/layout.scss';
import SiderbarSecond from './SiderbarSecond';
import AppBottomActions from './AppBottomActions';
import AppLogo from './AppLogo';

export default ({ 
    title, 
    children, 
    userStore, 
    menuSelectedKey,
    settingStore 
}) => {
    const { menus } = settingStore;
    // menu selected for level1
    let menuSelected = menus[0];
    // menu selected for level2
    let subMenuSelected = null;

    // get selected menus for level1 and level2
    menus.forEach((item) => {
        if (item.key === menuSelectedKey) {
            menuSelected = item;
        } else if (item.subMenus && item.subMenus.length > 0) {
            item.subMenus.forEach((subItem) => {
                if (subItem.key === menuSelectedKey) {
                    menuSelected = item;
                    subMenuSelected = subItem;
                }
            });
        }
    });

    const bodyCls = classnames({
        'app-body': true,
        'no-second-menu': !subMenuSelected
    });

    return (
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
            <div className={bodyCls}>
                <div className="app-siderbar">
                    <AppLogo />
                    <SiderbarFirst menus={menus} menuSelected={menuSelected} />
                    {
                        subMenuSelected ? (
                            <SiderbarSecond 
                                title={menuSelected.alias}
                                menus={menuSelected.subMenus} 
                                menuSelected={subMenuSelected} 
                            />
                        ) : null
                    }
                    <AppBottomActions />
                </div>
                <div className="app-container">
                    <Header userStore={userStore} />
                    { children }
                </div>
            </div>
        </div>
    );
};
