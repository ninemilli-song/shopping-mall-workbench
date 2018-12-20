/**
 * 全局配置
 * 菜单 用户信息
 */
import { types, applySnapshot } from 'mobx-state-tree';

const Menu = types.model({
    id: types.number,
    label: types.string,
    key: types.string,
    icon: types.string
});

const SettingStore = types.model({
    menus: types.array(Menu)
});

let store = null;

const defaultMenus = [
    {
        id: 1,
        label: '概况',
        key: 'rules',
        icon: 'mail',
    },
    {
        id: 2,
        label: '店鋪',
        key: 'subjects',
        icon: 'appstore',
    },
    {
        id: 3,
        label: '商品',
        key: 'reports',
        icon: 'pay-circle',
    },
    {
        id: 4,
        label: '订单',
        key: 'indus',
        icon: 'switcher',
    },
    {
        id: 5,
        label: '客户',
        key: 'analysis',
        icon: 'tool',
    },
    {
        id: 6,
        label: '数据',
        key: 'entries',
        icon: 'team',
    },
    {
        id: 7,
        label: '资产',
        key: 'practice',
        icon: 'team',
    }
];

export default function init(iserver, snapshot = null) {
    if (iserver) {
        store = SettingStore.create({
            menus: defaultMenus
        });
    }
    if (store === null) {
        store = SettingStore.create({
            menus: defaultMenus
        });
    }
    if (snapshot) {
        applySnapshot(store, snapshot);
    }
    return store;
}