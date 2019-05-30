import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layouts/Navbar'
import Dashboard from './components/dashboard/dashboard'
import DreamDetails from './components/dreams/DreamDetails'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import CreateDream from './components/dreams/CreateDream'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/dream/:id' component={DreamDetails} />
          <Route path='/Signin' component={Signin} />
          <Route path='/Signup' component={Signup} />
          <Route path='/createdream' component={CreateDream} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
