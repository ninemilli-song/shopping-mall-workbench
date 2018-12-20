import React from 'react';
import { Menu } from 'antd';
import './style/siderbar.scss';

class Siderbar extends React.Component {
    prefixCls = 'app-siderbar'

    handleClick = () => {

    }

    render() {
        const { menus } = this.props;

        return (
            <div className={`${this.prefixCls}`}>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 90 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    {
                        menus.map(item => (
                            <Menu.Item key={item.id}>
                                { item.label }
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </div>
        );
    }
}

export default Siderbar;
