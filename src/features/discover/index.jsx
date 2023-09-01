
import React, { useState } from 'react'
import { TabBar, NavBar, SpinLoading  } from 'antd-mobile'

import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'
import './index.scss'

const Discover =  () => {
  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <AppOutline />,
      iframeUrl: 'https://im.qq.com'
    },
    {
      key: 'todo',
      title: '待办',
      icon: <UnorderedListOutline />,
      iframeUrl: 'https://join.qq.com'
    },
    {
      key: 'message',
      title: '消息',
      icon: (active) =>
        active ? <MessageFill /> : <MessageOutline />,
        iframeUrl: 'https://news.qq.com'
    },
    {
      key: 'personalCenter',
      title: '我的1',
      icon: <UserOutline />,
       iframeUrl: 'https://join.qq.com'
    },
    {
      key: 'personalCenter1',
      title: '我的2',
      icon: <UserOutline />,
       iframeUrl: 'https://join.qq.com'
    },
    {
      key: 'personalCenter2',
      title: '我的3',
      icon: <UserOutline />,
       iframeUrl: 'https://join.qq.com'
    },
    {
      key: 'personalCenter3',
      title: '我的4',
      icon: <UserOutline />,
       iframeUrl: 'https://join.qq.com'
    },
  ]
  const [activeKey, setActiveKey] = useState('首页')
  const [loading, setLoading] = useState(true)
  const [iframeUrl, setIframeUrl] = useState('https://im.qq.com')
  const onBack = () => {
    window.history.back();
  };
  const handleTabBarClick = (activeKey) => {
    const iframeUrl = tabs.find((item) => item.title === activeKey).iframeUrl;
    setActiveKey(activeKey)
    setIframeUrl(iframeUrl)
    setLoading(true)
  }
  const renderLoading = () => {
    return <>
    { loading ? <div className='loading'>
    <SpinLoading color='primary'/>
  </div> : null} 
    </>
  }
  const renderBottom = () => {
    return <iframe 
    className='discover-body'
    onLoad={() => setLoading(false)}
    src={iframeUrl} 
  />
  }
  return (
    <div className='app'>
        <div className='navbar'>
          <NavBar onBack={onBack}>看板</NavBar>
        </div>
        <TabBar className='top' activeKey={activeKey} onChange={value => handleTabBarClick(value)}>
          {tabs.map(item => (
            <TabBar.Item style={{ flex: '0 0 auto', width: '15%'}} key={item.title} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
        <div className='bottom' >
        {renderLoading()}
        {renderBottom()}
        </div>
    </div>
  )
}
export default Discover