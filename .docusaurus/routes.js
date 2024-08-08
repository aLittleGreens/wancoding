import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c5c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings', '940'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings', '7cb'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', 'f2d'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '13c'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e16'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e81'),
            routes: [
              {
                path: '/docs/android/hello',
                component: ComponentCreator('/docs/android/hello', '31e'),
                exact: true,
                sidebar: "android"
              },
              {
                path: '/docs/basis/算法与数据结构/链表',
                component: ComponentCreator('/docs/basis/算法与数据结构/链表', '8e9'),
                exact: true,
                sidebar: "basis"
              },
              {
                path: '/docs/basis/算法与数据结构/数组',
                component: ComponentCreator('/docs/basis/算法与数据结构/数组', '13d'),
                exact: true,
                sidebar: "basis"
              },
              {
                path: '/docs/category/编程范式',
                component: ComponentCreator('/docs/category/编程范式', 'aec'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/category/设计模式',
                component: ComponentCreator('/docs/category/设计模式', 'fa1'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/category/设计原则',
                component: ComponentCreator('/docs/category/设计原则', 'cde'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/category/算法与数据结构',
                component: ComponentCreator('/docs/category/算法与数据结构', 'f94'),
                exact: true,
                sidebar: "basis"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'a6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/language/hello',
                component: ComponentCreator('/docs/language/hello', 'b46'),
                exact: true,
                sidebar: "language"
              },
              {
                path: '/docs/thought/编程范式/intro',
                component: ComponentCreator('/docs/thought/编程范式/intro', '1fd'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/抽象工厂',
                component: ComponentCreator('/docs/thought/设计模式/抽象工厂', '7d5'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/代理',
                component: ComponentCreator('/docs/thought/设计模式/代理', '543'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/单例',
                component: ComponentCreator('/docs/thought/设计模式/单例', '467'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/工厂方法',
                component: ComponentCreator('/docs/thought/设计模式/工厂方法', '4d4'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/建造者',
                component: ComponentCreator('/docs/thought/设计模式/建造者', '501'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/桥接',
                component: ComponentCreator('/docs/thought/设计模式/桥接', 'd45'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/适配器',
                component: ComponentCreator('/docs/thought/设计模式/适配器', 'f3f'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/原型',
                component: ComponentCreator('/docs/thought/设计模式/原型', '99b'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/装饰',
                component: ComponentCreator('/docs/thought/设计模式/装饰', '0be'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计模式/组合',
                component: ComponentCreator('/docs/thought/设计模式/组合', '72e'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/设计原则/',
                component: ComponentCreator('/docs/thought/设计原则/', '4f4'),
                exact: true,
                sidebar: "thought"
              },
              {
                path: '/docs/thought/markdown-features',
                component: ComponentCreator('/docs/thought/markdown-features', 'b28'),
                exact: true,
                sidebar: "thought"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
