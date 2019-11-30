import React, { Component } from 'react';
import axios from 'axios'
class NewVendor extends Component {
  constructor(props){
    super(props)
      this.state = {
        name: '',
        mobile: '',
        email: '',
        address:  '',
        state:  '',
        city:  '',
        pincode:  ''

    }
  }
    changeHandler = e => {
        this.setState({ [e.target.name] : e.target.value})
        console.log(this.state, '7878887')
      }

    submitHandler = e => {
      e.preventDefault();
      const vendor = {
        name: this.state.name,
        mobile: this.state.mobile,
        email: this.state.email,
        address: this.state.address,
        state: this.state.state,
        city: this.state.city,
        pincode: this.state.pincode
      };
      console.log(this.state)
      axios.post('http://localhost:4000/api/v1/vendors', {vendor})
      .then( response => {
        console.log(response)
      })
    .catch(error =>{
        console.log(error)
    })
    }
    render() {
      const { name, mobile, address, state, city, pincode, email  } = this.state
        return (
            <div style={{marginTop: 10}}>
            	<p>Welcome to Create Component!!</p>
                <h3>Add New Business</h3>
                <form onSubmit={this.submitHandler}>
                     <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" name="name" value={name} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" name="email" value={email} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input type="text"  name="mobile" value={mobile} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text"  name="address" value={address} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text"  name="state" value={state} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text"  name="city" value={city} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text"  name="pincode" value={pincode} onChange={this.changeHandler} className="form-control"/>
                    </div>
                    <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register Business</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default NewVendor;