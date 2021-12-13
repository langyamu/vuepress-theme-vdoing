// nav

/*
* !说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
*
* 格式
* {
*   text:"显示文字"
*   link:"跳转的链接"  // 超链接或站内链接
*   item:[ // 子列表
*       { text:"" , link:"" }
*   ]
* }
*/

module.exports = [
    {text: '首页', link: '/'},
    {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [],
    },
    {
        text: 'go',
        link: '/go/',
        items: [],
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ],
    },
    {text: '友情链接', link: '/friends/'},
    {
        text: '更多',
        link: '/more/',
        items: [
            {text: 'siyuan-note', link: 'https://siyuan.langyamu.cn'},
        ],
    },
    // {text: '关于', link: '/about/'},
]
