import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyPie } from '../redux'

const HooksPieContainer = () => {
  const numOfPies = useSelector(state => state.pie.numOfPies)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of pies - {numOfPies}</h2>
      <button onClick={() => dispatch(buyPie())}>Buy Pies</button>
    </div>
  )
}

export default HooksPieContainer
