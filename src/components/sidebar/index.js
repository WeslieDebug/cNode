// Copyright (c) 2018 by monster1935. All Rights Reserved.
import React, { Component } from 'react';
import './index.less';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Sidebar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      noReplyList: [],
    };
  }

  //筛选出“无人回复的话题”数据
  componentDidMount() {
    this.getNoReplyData().then(res => {
      if (res.status === 200) {
        for(let i = 0;i < res.data.data.length;i++){
          if(res.data.data[i].reply_count == 0){
            this.setState({
              noReplyList:[...this.state.noReplyList,res.data.data[i]]
            })
          }
        }
      } else {
        console.error(res.statusText);
      }
    }).catch(e => {
      console.warn(e);
    });
  }

  //接收所有文章数据（后端api没写“无人回复的话题”api数据，所以要筛选数据）
  getNoReplyData() {
    return axios.get('https://cnodejs.org/api/v1/topics',{
      params: {
        // reply_count: limit
      }
    });
  }

  //创建无人回复话题列表
  noReplyListOl(){
    // console.log(this.state.noReplyList)
    return this.state.noReplyList.map((noReply) => (
      <div className='noreply'>
      <Link
        to={'/topic/'+noReply.id}
        key={noReply.id}
      >
        {noReply.title}
      </Link>
      </div>
    ));
  }
  
  render(){
    return(
      <div>
      <div className="panel">
        <div className="inner">
          <p>CNode: Node.js专业中文社区</p>
          <div>
            您可以
            <a href="/">登录</a>
            或
            <a href="/">注册</a>
            也可以
            <a href="/">
              <span className="span-info">通过 Github 登录</span>
            </a>
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="header">
          <span className="col-fade">无人回复的话题</span>
        </div>
        <div className="inner">
          <ol>
          {this.noReplyListOl()}
          </ol>
        </div>
      </div>
      <div className="panel">
        <div className="header">
          <span className="col-fade">积分榜 Top 100 >></span>
        </div>
        <div className="inner">
          content
        </div>
      </div>
  
      <div className="panel">
        <div className="header">
          <span className="col-fade">友情社区</span>
        </div>
        <div className="inner">
          <ol className="friendship-community">
            <li>
              <a
                href="https://ruby-china.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="//static2.cnodejs.org/public/images/ruby-china-20150529.png"
                  alt="Ruby China"
                />
              </a>
            </li>
            <div className="sep10"></div>
            <li>
              <a
                href="http://golangtc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt="Golang 中国"
                />
              </a>
            </li>
            <div className="sep10"></div>
            <li>
              <a
                href="http://phphub.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="//static2.cnodejs.org/public/images/phphub-logo.png" alt="Laravel 社区"
                />
              </a>
            </li>
            <div className="sep10"></div>
          </ol>
        </div>
      </div>
      <div className="panel">
        <div className="header">
          <span className="col-fade">客户端二维码</span>
        </div>
        <div className="inner cnode-app-download">
          <img
            width="200"
            src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
            alt="qrcode"
          />
          <br/>
          <a
            href="https://github.com/soliury/noder-react-native"
            target="_blank"
            rel="noopener noreferrer"
          >
            客户端源码地址
          </a>
        </div>
      </div>
    </div>
    )
    }
}

export default Sidebar;
