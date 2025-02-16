// config.js
// 全局配置文件
// minDate: 仅显示该日期之后（含该日期）的 memo
// tagListOrder: "asc" 表示正向排序（计数从低到高），"desc" 表示反向排序（计数从高到低）
// tagFilterMode: "include" 表示正选（只显示包含该 tag 的 memo），"exclude" 表示反选（过滤出不包含该 tag 的 memo）
var filterConfig = {
    minDate: "2024-01-01",
    tagListOrder: "desc",
    tagFilterMode: "include",
    defaultTagFilter: "",
    
    // 笔记文件链接地址，通过配置管理链接
    notesFileUrl: "flomo/memos.html",
    
    // 网站图标配置
    icons: {
        favicon: "assets/images/icon.png",  // 网站图标
        size: "180x180"  // 图标尺寸
    },
    
    // SEO相关配置项
    seo: {
        title: "Open your flomo",
        description: "思想是可以被公开的 - 让知识和想法自由流动",
        keywords: "flomo,笔记,公开,想法,知识管理,笔记分享,个人知识库,思维导图,标签管理,数字花园,第二大脑,知识整理,学习笔记,灵感收集",
        canonicalUrl: "openflomo.kkuk.dev" // 请根据实际情况替换为正确域名
    },
    
    // 添加版本控制
    version: new Date().getTime(), // 使用时间戳作为版本号，确保每次部署都会更新
    
    // 缓存控制
    cacheControl: {
        enabled: true,  // 是否启用缓存控制
        maxAge: 0      // 缓存时间（秒）
    }
}; 