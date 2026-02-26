import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Natsu Cow",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用文档', link: '/如何使用Bot' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/如何使用Bot' },
          { text: '了解Natsu Cow', link: '/NatsuBot简介' },
          { text: '功能介绍', link: '/功能介绍' },
          { text: '?!', link: '/不能点！！！' }
        ]
      },
      {
        text: '更新日志',
        items: [
          { text: 'NatsuCow更新日志', link: '/更新日志' }
        ]
      },
      {
        text: '使用须知',
        items: [
          { text: '引言', link: '/须知前言' },
          { text: '小夏互联 使用须知', link: '/使用须知' },
          { text: '使用须知 II', link: '/须知2' }
        ]
      },
      {
        text: '安全与隐私',
        items: [
          { text: '隐私政策', link: '/隐私政策' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})