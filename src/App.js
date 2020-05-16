import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route ,Switch,Link} from 'react-router-dom';

const HatsPage = (props) =>{
return (
  <div>
<h1> Hats Page</h1>
<Link to={`${props.match.url}/13`}>Is it for 13</Link>
</div>
);
}
/*const test = props=>{
  console.log(props);
  return (
    <div>
    <h1>Test it</h1>
    <button onClick={() => props.history.push('/hats')}>Button Hat</button>
    </div>
  );
}
const Topic = (props) => {
  console.log(props);
  return <div><h1> Topic No. is {props.match.params.topicId}</h1></div>;
}
function App(props) {
 
  return (
    <div>
    <Switch>
    
    <Route exact path='/' component={test} />
    <Route exact path='/hats' component={HatsPage} />
    <Route exact path='/hats/:topicId' component={Topic} />
    
    </Switch>
  </div>
  );
}*/

function App()
{
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/shop/hats' component={HatsPage} />
    </Switch>
    </div>


  )
}

export default App;
