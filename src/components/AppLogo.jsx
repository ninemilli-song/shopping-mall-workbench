import React from 'react';
import './style/app-logo.scss';

class AppBottomActions extends React.Component {
    prefixCls = 'app-logo'

    render() {
        return (
            <div className={this.prefixCls}>
                logo
            </div>
        );
    }
}

export default AppBottomActions;
