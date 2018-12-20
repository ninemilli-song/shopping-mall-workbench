/**
 * 全局配置
 * 菜单 用户信息
 */
import { types, applySnapshot } from 'mobx-state-tree';
import menus from '../global/menus';

const SecondMenu = types.model({
    id: types.number,
    label: types.string, // 菜单显示名
    key: types.string, // 菜单key 目前与页面名对应
    icon: types.string
});

const Menu = types.model({
    id: types.number,
    label: types.string, // 菜单显示名
    key: types.string, // 菜单key 目前与页面名对应
    icon: types.string,
    subMenus: types.maybeNull(types.array(SecondMenu))
});

const SettingStore = types.model({
    menus: types.array(Menu)
});

let store = null;

const defaultMenus = menus;

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
