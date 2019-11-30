import React, { Component } from 'react';
import './App.css';
import Vendor from './components/vendors';
import NewVendor from './components/new_vendor'
// import Businesses from './components/businesses'

class App extends Component {

  state = {
    vendors: [],
    new_vendor: []
    // businesses: []
  }
  render() { 
    
    return ( 
        <div className="App">
        <Vendor vendors={this.state.vendors} />
        {/* <NewVendor vendors={this.state.vendors} /> */}

        {/* <Businesses Businesses={this.state.businesses}/> */}
      </div>
    );
  }
}
 
export default App;