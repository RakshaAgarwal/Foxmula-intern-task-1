import React from 'react'
import "./App.css"
import { useSelector, useDispatch } from "react-redux";

import { increment } from "./actions/index";

export const App = () => {
  const myState = useSelector((state) => state.increaseNumber);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
      <div>
      <button className="counterbutton" onClick={ () => dispatch(increment())}>Click Me</button>
      </div>
      <div>
      <input name="countvalue" type="text" className="inputcount" value={myState} />
      </div>
      </div>
    </div>
  )
}

export default App