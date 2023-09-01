import { useState } from 'react'
import ErrorBoundaryComponent from './features/ErrorBoundary'
import IframeTest from './features/IframeTest'
import Discover from './features/discover'
import TabBar from './features/IframeTest/tabBar'
// import Flex from './features/IframeTest/flex'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Flex></Flex> */}
    {/* <TabBar></TabBar> */}
    <Discover></Discover>
    {/* <IframeTest></IframeTest> */}
     {/* <ErrorBoundaryComponent></ErrorBoundaryComponent> */}
    </>
  )
}

export default App
