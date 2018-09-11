import React, { Component } from 'react';
import styled from 'styled-components';

import { addBrowsePrefix } from '../util/unil'
import { config } from '../config/config'

class Experience extends Component {
 
  componentDidMount() {
    const rect = this.experience.parentNode.getBoundingClientRect();

    this.props.setProfileHeight((rect.bottom - rect.top) + 'px');
  }

  render() {
    const Experience = styled.div`
      ${addBrowsePrefix('box-sizing', 'border-box')}
      float: left;
      overflow: hidden;
      width: 823px;
      padding: 44px;
      background-color: ${config.whiteBg};

      h1 {
        text-align: left;
        color: #6c6b6b;
        font-family: "微软雅黑,宋体";
      }

      .projects {
        padding: 0;
        
        >li {
          list-style: none;

          header {
            display: flex;
            justify-content: space-between;
            overflow： hidden;

            .project-name {
              color: ${config.bg};
              font-size: 22px; 
              font-family: "微软雅黑,宋体";
            }

            .project-skills {
              .skill {
                background-color: ${config.bg};
                padding: 5px;
                color: #FFFFFF;
                margin-left: 5px;
                float: left;
                ${addBrowsePrefix('border-radius', '10px')}
              }
            }
          }

          .project-content {
            h3 {
              padding-left: 20px;
              font-family: "微软雅黑,宋体";   
            }

            li {
              color: #787878;
            }
          }
        }
      }

      .hr-bold {
        border: 2px solid ${config.hrColor};
      } 

      p {
        color: #218175;
      }
    `;

    return (
      <Experience>
        <div ref={(experience) => { this.experience = experience; }}>
          <h1>工作经历</h1>
          <h3>就职深圳穿越医疗研发中心，工作期间负责公司前端架构选择、搭建、开发等工作。</h3>
          <hr className="hr-bold"/>
          <h1>项目经历</h1>
          <hr className="hr-bold"/>
          <ul className="projects">
            <li>
              <section>
                <header>
                  <div className="project-name">医院输血科管理系统</div>
                  <div className="project-skills">
                    <div className="skill">React</div>
                    <div className="skill">Antd Pro</div>
                    <div className="skill">dva</div>
                    <div className="skill">roadhog</div>
                    <div className="skill">redux</div>
                  </div>
                </header>
                <div className="project-content">
                  <article>
                    <h3>项目描述</h3>
                    <ul>
                      <li>采用 React+Antd Pro+dva+roadhog 架构。配置roadhog。实现生产环境和开发环境的隔离</li>
                      <li>封装antd的antoComplete组件，使之能接收一个对象数组，完成中文或拼音首字母的模糊搜索。实现代码的复用。</li>
                      <li>利于Redux对后台返回的字典进行管理，做到字典被增删改时，所有的页面都能做到字典状态的同步。</li>
                      <li>熟练复用蚂蚁金服提供的 Antd 前端 UI 组件库， 对于数据的提交，展示。利用antd的表单校验功能，加上自己编写的自定义校验函数，数据进行全面校验。</li>
                    </ul>
                  </article>
                  <article>
                    <h3>项目小结</h3>
                    <ul>
                      <li>关注代码的清晰性、模块性和可读性。注重代码的复用。</li>
                    </ul>
                  </article>
                </div>
              </section>
            </li>
            <li>
              <section>
                <header>
                  <div className="project-name">手机鹰眼App</div>
                  <div className="project-skills">
                    <div className="skill">React</div>
                    <div className="skill">webpack</div>
                    <div className="skill">Echarts</div>
                    <div className="skill">Cordova</div>
                  </div>
                </header>
                <div className="project-content">
                  <article>
                    <h3>项目描述</h3>
                    <ul>
                      <li>手机鹰眼是一款用于卫生主管部门监控的App。</li>
                      <li>参照时下流行的网页设计，对页面设计进行调试。</li>
                      <li>采用 lazyload 懒加载、布局采用 flex 布局</li>
                      <li>使用rem还原设计图处理兼容性；</li>
                      <li>利用CSS Modules完成CSS的模块化，使CSS更加易用易维护。</li>
                      <li>利用函数对于复杂数据进行处理，将Echarts的图表做成一个可配置的组件；实现代码复用</li>
                      <li>利用React.PureComponent来做的性能优化。使用不可变对象来做复杂类型的性能优化。</li>
                      <li>Cordova打包App；</li>
                    </ul>
                  </article>
                  <article>
                    <h3>项目小结</h3>
                    <ul>
                      <li>深入理解React的单项数据渲染，对应任何可变数据只有一个单一“数据源”。通常，状态都是首先添加在需要渲染数据的组件中。如果另一个组件也需要这些数据，你可以将数据提升至离它们最近的父组件中。你应该在应用中保持 自上而下的数据流，而不是尝试在不同组件中同步状态。状态提升比双向绑定方式要写更多的“模版代码”，但是可以更快地寻找和定位bug。因为哪个组件保有状态数据，也只有它自己能够操作这些数据，发生bug的范围就被大大地减小了。此外，也可以使用自定义逻辑来拒绝或者更改用户的输入。</li>
                    </ul>
                  </article>
                </div>
              </section>
            </li>
            <li>
              <section>
                <header>
                  <div className="project-name">血浆站业务系统</div>
                  <div className="project-skills">
                    <div className="skill">Angular(5.0)</div>
                    <div className="skill">Node</div>
                    <div className="skill">TS</div>
                    <div className="skill">Electron</div>
                  </div>
                </header>
                <div className="project-content">
                  <article>
                    <h3>项目描述</h3>
                    <ul>
                      <li>浆站业务系统 是一个服务于献血浆服务的业务程序，基于HTML、CSS、JavaScript原生脚本、Angualr类库以及Ajax, Electron等客户端技术，Node等服务端技术、实现浆站业务的无纸化。</li>
                      <li>Router实现模块的按需加载；</li>
                      <li>Pipe,Service数据的集中处理以及通用模块的实现</li>
                      <li>使用Electron直接调用用户本地的打印机，读卡器等外接设备</li>
                      <li>使用Video + Canvas 配合后台实现人脸识别；</li>
                      <li>Node实现用户照片的本地存储，客户端版本的自动更新；</li>
                    </ul>
                  </article>
                  <article>
                    <h3>项目小结</h3>
                    <ul>
                      <li>使用TS使代码更加稳定可靠易维护，深入对项目的整体把控和理解。</li>
                      <li>利用Angular管道处理需要展示的数据，利用管道的特性，编写可复用的管道，多个管道一起使用</li>
                      <li>通过把组件中和视图有关的功能与其他类型的处理分离开，可以让组件类更加精简、高效。 组件的工作只管用户体验，而不用顾及其它。 它提供用于数据绑定的属性和方法，以便作为视图（由模板渲染）和应用逻辑的中介。</li>
                      <li>使用Angular的服务，把组件和服务区分开，以提高模块性和复用性。诸如从服务器获取数据、验证用户输入或直接往控制台中写日志等工作。 把这些任务委托给各种服务。通过依赖注入将应用逻辑分解为服务，并让这些服务可用于各个组件中。</li>
                    </ul>
                  </article>
                </div>
              </section>
            </li>
          </ul>
        </div>
      </Experience>
    );
  }
}
export default Experience;
