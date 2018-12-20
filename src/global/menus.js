/**
 * Global Menu Data
 */
const menus = [
    {
        id: 1,
        label: '概况',
        key: 'index',
        icon: 'mail'
    },
    {
        id: 2,
        label: '店鋪',
        key: 'shop',
        icon: 'appstore',
        subMenus: [
            {
                id: 11,
                label: '店铺概况',
                key: 'shop-dashboard',
                icon: 'mail',
            },
            {
                id: 12,
                label: '网店装修',
                key: 'shop-showcase',
                icon: 'mail',
            },
            {
                id: 13,
                label: '小程序装修',
                key: 'shop-weapp',
                icon: 'mail',
            },
            {
                id: 14,
                label: '微页面',
                key: 'shop-h5',
                icon: 'mail',
            },
            {
                id: 15,
                label: '全店风格',
                key: 'shop-globaltemplate',
                icon: 'mail',
            },
            {
                id: 16,
                label: '自定义模块',
                key: 'shop-component',
                icon: 'mail',
            },
            {
                id: 17,
                label: '我的文件',
                key: 'shop-attachment',
                icon: 'mail',
            },
        ]
    },
    {
        id: 3,
        label: '商品',
        key: 'goods',
        icon: 'pay-circle',
    },
    {
        id: 4,
        label: '订单',
        key: 'trade',
        icon: 'switcher',
    },
    {
        id: 5,
        label: '客户',
        key: 'scrm',
        icon: 'tool',
    },
    {
        id: 6,
        label: '数据',
        key: 'statcenter',
        icon: 'team',
    },
    {
        id: 7,
        label: '资产',
        key: 'asset',
        icon: 'team',
    }
];

export default menus;
