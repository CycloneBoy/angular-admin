
 const MenuList = [
    {
        title: '首页',
        key: '/home',
        icon: 'home',
        children:[],
    },
    {
        title: 'UI',
        key: '/ui',
        icon: 'home',
        children: [
            {
                title: '按钮',
                key: '/ui/buttons',
                children:[],
            },
            {
                title: '弹框',
                key: '/ui/modals',
                children:[],
            },
            {
                title: 'Loading',
                key: '/ui/loadings',
                children:[],
            },
            {
                title: '通知提醒',
                key: '/ui/notification',
                children:[],
            },
            {
                title: '全局Message',
                key: '/ui/messages',
                children:[],
            },
            {
                title: 'Tab页签',
                key: '/ui/tabs',
                children:[],
            },
            {
                title: '图片画廊',
                key: '/ui/gallery',
                children:[],
            },
            {
                title: '轮播图',
                key: '/ui/carousel',
                children:[],
            }
        ]
    },
    {
        title: '表单',
        key: '/form',
        icon: 'form',
        children: [
            {
                title: '登录',
                key: '/form/login',
                icon: 'form',
                children:[],
            },
            {
                title: '注册',
                key: '/form/reg',
                icon: 'home',
                children:[],
            }
        ]
    },
    {
        title: '表格',
        key: '/table',
        icon: 'table',
        children: [
            {
                title: '基础表格',
                key: '/table/basic',
                children:[],
            },
            {
                title: '高级表格',
                key: '/table/high',
                children:[],
            }
        ]
    },
    {
        title: '富文本',
        key: '/rich',
        icon: 'file-markdown',
        children:[],
    },
    {
        title: '城市管理',
        key: '/city',
        icon: 'file-markdown',
        children:[],
    },
    {
        title: '订单管理',
        key: '/order',
        icon: 'fire',
        btnList: [
            {
                title: '订单详情',
                key: 'detail',
                children:[],
            },
            {
                title: '结束订单',
                key: 'finish',
                children:[],
            }
        ]
    },
    {
        title: '员工管理',
        key: '/user',
        icon: 'user',
        children:[],
    },
    {
        title: '车辆地图',
        key: '/bikeMap',
        icon: 'fire',
        children:[],
    },
    {
        title: '图表',
        key: '/charts',
        icon: 'instagram',
        children: [
            {
                title: '柱形图',
                key: '/charts/bar',
                icon: 'bar-chart',
                children:[],
            },
            {
                title: '饼图',
                key: '/charts/pie',
                icon: 'pie-chart',
                children:[],
            },
            {
                title: '折线图',
                key: '/charts/line',
                icon: 'line-chart',
                children:[],
            },
        ]
    },
    {
        title: '权限设置',
        key: '/permission',
        icon: 'team',
        children:[],
    },
];

export default MenuList;
