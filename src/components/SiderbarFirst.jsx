/**
 * First Level Menu Component
 */
import React from 'react';
import { Menu } from 'antd';
import Router from 'next/router';
import './style/siderbar-first.scss';

class SiderbarFirst extends React.Component {
    prefixCls = 'app-siderbar-first'

    handleClick = (e) => {
        console.log('menu handle click ------> ', e);
        const { key } = e;
        const { menus } = this.props;

        const menu = menus.find((item) => {
            return item.key === key;
        });

        console.log('menu ------> ', menu);

        // Use the first sub menu key as the page name, or use the menu key of itself.
        const page = (menu.subMenus && menu.subMenus.length > 0) ? menu.subMenus[0].key : menu.key;

        Router.push(`/${page}`);
    }

    render() {
        const { menus, menuSelected } = this.props;

        return (
            <div className={`${this.prefixCls}`}>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 90 }}
                    defaultSelectedKeys={[menuSelected.key]}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {
                        menus.map(item => (
                            <Menu.Item key={item.key}>
                                { item.label }
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </div>
        );
    }
}

export default SiderbarFirst;
