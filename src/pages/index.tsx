import CanvasAction from '@/components/CanvasAction/CanvasAction'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <div className='landingPage'>
      <title>Tran Van Hung</title>
      <div className="container">
        <CanvasAction />
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default index