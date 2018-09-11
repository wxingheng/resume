import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import { addBrowsePrefix } from '../util/unil'
import { config, skills } from '../config/config'

import me from '../assets/me.png'

class Profile extends Component {

  render() {
    const Profile = styled.div`
      ${addBrowsePrefix('box-sizing', 'border-box')}
      float: left;
      overflow: hidden;
      width: 457px;
      height: ${this.props.height || 'auto'};
      padding: 77px;
      background-color: ${config.bg};


      >div {
         
      }

      .picture {
        text-align: center;
        width: 100%;
        
        img {
          display: inline-block;
          height:303px;
          ${addBrowsePrefix('border-radius', '50% 50%')}
        }
      }

      h1 {
        text-align: center;
        color: #FFFFFF;
        font-family: "微软雅黑,宋体";
      }

      h2 {
        text-align: center;
        color: ${config.hrColor};
        font-family: "微软雅黑,宋体";
        border-bottom: 1px solid ${config.hrColor};
      }
      .hr-bold {
        border: 2px solid ${config.hrColor};
      } 

      .attitude {
        padding: 0;

        li {
          list-style: none;
          text-align: center;
          color: #218175;
          padding: 3px 0;
        }
      }

      p {
        color: #218175;
      }

      .skills {
        padding-left: 0;
        
        li {
          list-style: none;
          padding: 5px 0;
          overflow: hidden;
          height: 23px;

          .skill {
            float: left;
            width: 30%;
            height: 100%;
            line-height: 23px;
            font-size: 20px;
            text-align: right;
            color: #FFFFFF;
            padding-right: 5px;
            ${addBrowsePrefix('box-sizing', 'border-box')}
          }
          .percent {
            float: left;
            width: 70%;
            height: 100%;
            ${addBrowsePrefix('border-radius', '12px')}           
            background-color: rgba(0, 0, 0, .2);
            overflow: hidden;

            div {
              float: left;
              height: 100%;
              background-color: #FFFFFF;
            }
          }
        }
      }

      .contact {
        align-self: flex-end;
        padding: 0;

        li {
          list-style: none;
          display: flex;
          align-items:center;
          margin-bottom: 10px;

          span.text {
            font-size: 20px;
          }

          a {
            color: #FFF;
            display: flex;
            align-items:center;
            text-decoration: none;

            i {
              display: inline-block;              
              margin-right: 10px;  
              overflow: hidden;
              padding: 4px;
              background-color: #FFF;
              ${addBrowsePrefix('border-radius', '50% 50%')}

              span {
                width: 28px;
                height: 28px;
                font-size: 1.7em;
                text-align: center;
                ${addBrowsePrefix('border-radius', '50% 50%')}
                color: ${config.bg};
              }
            }
          }
        } 
      }
    `;

    return (
      <Profile>
        <div>
          <div className="picture">
              <img src={me} alt="照片"/>
          </div>
          <h1>伍星恒</h1>
          <hr className="hr-bold"/>
          <ul className="attitude">
            <li>一行代码的执着</li>
            <li>一夜失眠的创意</li>
            <li>一腔热血的激情</li>
          </ul>
          <h2>JavaScript前端开发工程师</h2>
          <ul className="skills">
            {skills.map(function(elem, index){
                return  <li key={index}>
                          <div className="skill">{elem.name}</div>
                          <div className="percent">
                            <div style={{width: elem.percent}}></div>
                          </div>
                        </li>
            })}
          </ul>
          <p>我是一个充满热情、善于解决问题的前端工程师。希望找到能让我充分发挥这些特长的工作</p>
          <ul className="contact">
            <li><a><i><FontAwesome name='phone' /></i><span className='text'>13419595634</span></a></li>
            <li><a><i><FontAwesome name='envelope' /></i><span className='text'>wxingheng@outlook.com</span></a></li>
            <li><a><i><FontAwesome name='github' /></i><span className='text'>github.com/wxingheng</span></a></li>
          </ul>
        </div>
      </Profile>
    );
  }
}
export default Profile;
