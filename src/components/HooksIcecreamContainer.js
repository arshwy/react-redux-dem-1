import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream } from '../redux/index.js'

function HooksIcecreamContainer(){
  const number = useSelector(state => state.icecream.number)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of icecreams (By Hooks) - { number }</h2>
      <button onClick={()=>dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  )
}



export default HooksIcecreamContainer
