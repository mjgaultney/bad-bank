import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Deposit from './deposit';
import Login from './login';
import Balance from './balance';
import AllData from './alldata';
import CreateAccount from './createaccount';
import Withdraw from './withdraw';

const UserContext = React.createContext(
  {users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}
);

function Spa() {
  return (
    <HashRouter>
      <NavBar/>

        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount(UserContext)} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData(UserContext)} />
        </div>

    </HashRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Spa />
  </React.StrictMode>,
  document.getElementById('root')
);

