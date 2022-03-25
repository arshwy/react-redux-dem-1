import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/index.js'

function HooksCakeContainer(){
  const number = useSelector(state => state.cake.number)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of cakes (By Hooks) - { number }</h2>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}



export default HooksCakeContainer
