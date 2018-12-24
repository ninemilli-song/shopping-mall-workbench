/**
 * 店铺概况
 */
import React from 'react';

class ShopDashboard extends React.Component {
    prefixCls = 'shop-dashboard'

    render() {
        return (
            <div className={this.prefixCls}>
                <div className={`app-header-bar ${this.prefixCls}-header-bar`}>
                    <div className={`app-header-bar-title ${this.prefixCls}-header-bar-title`}>
                        <span>店铺概况</span>
                    </div>
                </div>
                <div className={`app-body-container ${this.prefixCls}-body-container`}>
                    aaa
                </div>
            </div>
        );
    }
}

export default ShopDashboard;
