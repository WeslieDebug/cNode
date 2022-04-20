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

  //接收和筛选出“无人回复的话题”数据
  componentWillMount() {
    let list = [];
    this.getNoReplyData().then(res => {
      if (res.status === 200) {
        for(let i = 0;i < res.data.data.length;i++){
          if(res.data.data[i].reply_count == 0){
            list.push(res.data.data[i]);
            // console.log(res.data.data[i]);
          }
        }
      } else {
        console.error(res.statusText);
      }
    }).catch(e => {
      console.warn(e);
    });
    this.setState({
      noReplyList: list,
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
  //question:this.noreplylist未定义，因为我在willcoponent里面接收的数据，它在生命周期render前面，导致我在render里面调用数据时显示未定义
  // noReplyListOl(){
  //   let list = [];
  //   console.log(this.noReplyList);
  //   list = this.noReplyList;
  //   return list.map((noReply) => (
  //     <Link
  //       // to={route.path}
  //       // key={route.path}
  //       // className={this.state.tagType === route.type ? 'topic-tab current-tab' : 'topic-tab'}
  //     >
  //       {noReply.title}
  //     </Link>
  //   ));
  // }
  
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
          {/* {this.noReplyListOl()} */}
          111
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
            {/* <li>
              <a
                href="https://testerhome.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK"
                  alt="中国测试技术社区"
                />
              </a>
            </li> */}
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

// const Sidebar = () => (
//   <div>
//     <div className="panel">
//       <div className="inner">
//         <p>CNode: Node.js专业中文社区</p>
//         <div>
//           您可以
//           <a href="/">登录</a>
//           或
//           <a href="/">注册</a>
//           也可以
//           <a href="/">
//             <span className="span-info">通过 Github 登录</span>
//           </a>
//         </div>
//       </div>
//     </div>
//     <div className="panel">
//       <div className="header">
//         <span className="col-fade">无人回复的话题</span>
//       </div>
//       <div className="inner">
//         content
//       </div>
//     </div>
//     <div className="panel">
//       <div className="header">
//         <span className="col-fade">积分榜 Top 100 >></span>
//       </div>
//       <div className="inner">
//         content
//       </div>
//     </div>

//     <div className="panel">
//       <div className="header">
//         <span className="col-fade">友情社区</span>
//       </div>
//       <div className="inner">
//         <ol className="friendship-community">
//           <li>
//             <a
//               href="https://ruby-china.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="//static2.cnodejs.org/public/images/ruby-china-20150529.png"
//                 alt="Ruby China"
//               />
//             </a>
//           </li>
//           <div className="sep10"></div>
//           <li>
//             <a
//               href="http://golangtc.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="//static2.cnodejs.org/public/images/golangtc-logo.png" alt="Golang 中国"
//               />
//             </a>
//           </li>
//           <div className="sep10"></div>
//           <li>
//             <a
//               href="http://phphub.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="//static2.cnodejs.org/public/images/phphub-logo.png" alt="Laravel 社区"
//               />
//             </a>
//           </li>
//           <div className="sep10"></div>
//           {/* <li>
//             <a
//               href="https://testerhome.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <img
//                 src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK"
//                 alt="中国测试技术社区"
//               />
//             </a>
//           </li> */}
//         </ol>
//       </div>
//     </div>
//     <div className="panel">
//       <div className="header">
//         <span className="col-fade">客户端二维码</span>
//       </div>
//       <div className="inner cnode-app-download">
//         <img
//           width="200"
//           src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
//           alt="qrcode"
//         />
//         <br/>
//         <a
//           href="https://github.com/soliury/noder-react-native"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           客户端源码地址
//         </a>
//       </div>
//     </div>
//   </div>
// );

export default Sidebar;
