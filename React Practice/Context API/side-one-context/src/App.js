import React,{useState} from 'react';
import { Fragment } from 'react';
import Context from './Context';
import Provider from './Provider'


const Agents = () => {
  return <AgentOne/>
}
const AgentOne = () => {
  return <AgentTwo/>
}
const AgentTwo =  () => {
  return (
    <Context.Consumer>
     {context => (
   <Fragment>
    <h1>Agent Information</h1>
    <h1>The agent place is{context.data.mname}</h1>
    <h1>The mission status is {context.data.accept}</h1>
    <button onClick={context.isMissionAccepted}>accept</button>
   </Fragment>
  )}
    </Context.Consumer>
  )
}

const App = () => {
  return (<>
  <div>
    <h1>Context API</h1>
    <Provider>
      <Agents/>
    </Provider>
  </div>
  </>)
}
export default App;