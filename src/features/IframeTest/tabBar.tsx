import React, { useState } from 'react'
import { Badge, TabBar, NavBar } from 'antd-mobile'
import { DemoBlock } from './demos-util'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import './index.scss'

const aaa =  () => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: 'message',
      title: '消息',
      icon: (active: boolean) =>
        active ? <MessageFill /> : <MessageOutline />,
    },
    {
      key: 'personalCenter',
      title: '我的',
      icon: <UserOutline />,
    },
    {
      key: 'personalCenter1',
      title: '我的',
      icon: <UserOutline />,
    },
    {
      key: 'personalCenter2',
      title: '我的',
      icon: <UserOutline />,
    },
    {
      key: 'personalCenter3',
      title: '我的',
      icon: <UserOutline />,
    },
  ]

  return (
    <div className='app'>
        <div className='navbar'>
          <NavBar>配合路由使用</NavBar>
        </div>
        <TabBar className='top' style={{ overflowX: 'scroll'}}>
          {tabs.map(item => (
            <TabBar.Item style={{ flex: '0 0 auto', width: '15%'}} key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
        <div className='bottom'>
          {/* <iframe
            className='discover-body'
                src="https://im.qq.com" title="今日有悟">
          </iframe> */}
          {/* <iframe
            className='discover-body'
                src="https://news.qq.com" title="今日有悟">
          </iframe> */}
          <iframe
            className='discover-body'
                src="https://join.qq.com" title="今日有悟">
          </iframe>
        </div>
    </div>
  )
}
export default aaa