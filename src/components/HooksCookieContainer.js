import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCookie } from '../redux/index.js'

function HooksCookieContainer(){
  const number = useSelector(state => state.cookie.number)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of cookies (By Hooks) - { number }</h2>
      <button onClick={()=>dispatch(buyCookie())}>Buy Cookie</button>
    </div>
  )
}



export default HooksCookieContainer
