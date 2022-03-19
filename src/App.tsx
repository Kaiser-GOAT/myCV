import React, { useEffect } from 'react'
import './App.css'
import pic from './pic/pic.png'
import * as echarts from 'echarts'
function App() {
  useEffect(() => {
    const myChart = echarts.init(
      document.getElementById('skills') as HTMLElement
    )
    var option = {
      tooltip: {},
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5],
          },
        },
        indicator: [
          { name: '静态页面', max: 100 },
          { name: '编程基础', max: 100 },
          { name: 'Vue', max: 100 },
          { name: 'React', max: 100 },
          { name: '项目开发', max: 100 },
          { name: '沟通能力', max: 100 },
        ],
      },
      series: [
        {
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [90, 70, 60, 95, 85, 100],
              name: '预算分配（Allocated Budget）',
            },
          ],
        },
      ],
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
  })
  return (
    <div className="App">
      <article>
        <section className="bio">
          <h1>黄开森</h1>
          <img src={pic} alt="" />
          <p>男 | 26岁 | 温州 | 专科</p>
          <p>
            手机号：13858889915 | 微信：Amarillo_ks | 邮箱：341757594@qq.com
          </p>
        </section>

        <section className="jobs">
          <h2>工作经历</h2>
          <p>
            2020.2-2021.3，在温州智点科技有限公司担任前端开发，使用react,ant-de
            <br />
            sign-pro等框架开发国家电网的后台管理系统，出色完成各项工作。
            <br />
            期间表现优秀，成绩突出。
          </p>
        </section>

        <section className="skill">
          <h2>技能</h2>
          <div className="wrapper">
            <div id="skills"></div>
            <ul>
              <li>
                熟练掌握<strong>静态页面</strong>
                制作技巧，能将设计稿完美还原成页面。
              </li>
              <li>
                熟悉<strong>前后端分离技术</strong>
                ，包括AJAX，跨域，前端路由，Cookie，Session等。
              </li>
              <li>
                熟悉<strong>Vue全家桶</strong>的使用包括VueCli,VueRouter。
              </li>
              <li>
                熟练掌握<strong>React全家桶</strong>
                的使用，包括create-react-app,ReactRouter,Redux,react 的各种hook
                等。
              </li>
              <li>
                熟悉<strong>ES6</strong>,包括let/Promise/await/析构赋值。
              </li>
              <li>
                了解<strong>TypeScript</strong>的使用，我的项目是TS实现的。
              </li>

              <li>
                了解<strong>Webpack</strong>的配置和优化。
              </li>
              <li>
                熟悉网页3D技术
                <strong>three.js</strong>
                的开发，为上家公司开发过一套仓库管理系统。
              </li>
            </ul>
          </div>
        </section>

        <section className="projects">
          <h2>项目经历</h2>
          <h3>可视化大屏</h3>
          <div className="atarget">
            <a href="https://kaiser-goat.github.io/myScreen-demo-website/#/">
              预览链接
            </a>
            <a href="https://github.com/Kaiser-GOAT/myScreen-react-demo">
              源码链接
            </a>
          </div>
          <p>
            一个基于<strong>React</strong>/<strong>TypeScript</strong>/
            <strong>echarts</strong>
            的可视化大屏
          </p>
          <p>
            这是我自己做的一个可视化大屏，当中用到React,Typescript,echarts,three等技术栈。
          </p>
          <p>
            该项目大量使用<strong>图表</strong>
            ,让我对echarts有了深刻的理解和应用。
          </p>
          <h3>开心记账</h3>
          <div className="atarget">
            <a href="https://kaiser-goat.gitee.io/morney-react/#/money">
              预览链接
            </a>
            <a href="https://gitee.com/kaiser-GOAT/morney-react">源码链接</a>
          </div>
          <p>
            一个基于<strong>React</strong>/<strong>TypeScript</strong>
            的移动端单页面应用
          </p>
          <p>这是我从自己的需求出发，设计出的极简记账应用。</p>
          <p>
            特点是<strong>快速记账</strong>
            ，而且可以通过图表查看自己的消费习惯。
          </p>
          <p>
            该项目大量使用<strong>ReactHooks</strong>
            ,让我对Hooks有了深刻的理解和应用。
          </p>
          <h3>css动态图</h3>
          <div className="atarget">
            <p>
              <a href="https://kaiser-goat.github.io/one-punch-man/src/test.html">
                预览链接
              </a>
              <a href="https://github.com/Kaiser-GOAT/one-punch-man">
                源码链接
              </a>
            </p>
          </div>
          <p>
            这是我用<strong>CSS</strong>和<strong>JavaScript</strong>
            制作的一个简易版动态卡通人物
          </p>
          <p>
            该项目大量使用了CSS中的<strong>flex</strong>布局，并且用到
            <strong>animation</strong>使其动态化。
          </p>
          <p>用JavaScript使源码可以滚动播放，并增加了可调节按钮。</p>
          <p>
            我从该项目中深刻熟悉了CSS的flex布局及animation，并可以熟悉运用JavaScript。
          </p>
        </section>
        <section className="projects">
          <h2>开源项目</h2>

          <h3>Canvas画板</h3>
          <div className="atarget">
            <a href="https://kaiser-goat.github.io/canvas-test/">预览链接</a>
            <a href="https://github.com/Kaiser-GOAT/canvas-test">源码链接</a>
          </div>
          <p>
            这是一个基于原生JavaScript和Canvas完成的一个项目，能够实现
            <strong>简易的画板功能</strong>。
          </p>
          <h3>3D货架</h3>
          <div className="atarget">
            <a href="https://kaiser-goat.github.io/cangku3d-website/">
              预览链接
            </a>
            <a href="https://github.com/Kaiser-GOAT/cangku3d">源码链接</a>
          </div>
          <p>
            这是一个基于three.js + typescript + ant-design实现的
            <strong>3D货架demo</strong>。
          </p>
          <h3 className="page2">导航栏</h3>
          <div className="atarget">
            <a href="https://kaiser-goat.github.io/test-html/james.html">
              预览链接
            </a>
            <a href="https://github.com/Kaiser-GOAT/test-html">源码链接</a>
          </div>
          <p>
            这是我运用<strong>原生JavaScript</strong>制作的导航栏。
          </p>
        </section>
        <section className="projects">
          <h2>学习笔记</h2>
          <h3>浅析URL</h3>
          <p>
            这是我在学习HTTP时总结的一篇博客。
            <a
              href="https://www.yuque.com/docs/share/022c87e8-2a97-41b0-a4d6-55f5e3922fa4?# 《《浅析 URL》
》"
            >
              浅析URL
            </a>
          </p>
          <h3>JavaScript的诞生</h3>
          <p>
            我在最开始学习JavaScript时，了解了JavaScript诞生的历史，并将其写成了一篇博客。
            <a
              href="https://www.yuque.com/docs/share/abd8687e-7b72-4986-b10a-9e5eae9dda5f?# 《JavaScript的诞生
》"
            >
              JavaScript的诞生
            </a>
          </p>
          <h3>JavaScript 的基本语法</h3>
          <p>
            我总结了Javascript的语句，表达式及标识符，并写成了一篇博客。
            <a
              href="https://www.yuque.com/docs/share/9d713356-3d36-42fc-9096-b6f1d81fe377?# 《JavaScript 的基本语法
》"
            >
              JavaScript 的基本语法
            </a>
          </p>
          <h3>JS 对象基本用法</h3>
          <p>
            在学习Javascript的对象属性时，我将对象的增删改查进行总结归类，并写成了博客。
            <a
              href="https://www.yuque.com/docs/share/81c00791-ff85-4276-a47b-75b184f9f806?# 《 JS 对象基本用法
》"
            >
              JS对象基本用法
            </a>
          </p>
          <h3>JS 函数的执行时机</h3>
          <p>
            函数的执行时机是学习Javascript时会碰上的难题,对此我总结了一篇博客。
            <a href="https://www.yuque.com/docs/share/27fbc918-be62-4aad-8c82-8a332094dfd0?# 《JS 函数的执行时机》">
              JS 函数的执行时机
            </a>
          </p>
          <p>
            后续还有许多篇我在学习前端时做的总结博客，点击
            <a href="https://www.yuque.com/u2129100/nr1vbp">学习笔记</a>
            即可查看。
          </p>
        </section>
      </article>
    </div>
  )
}

export default App
