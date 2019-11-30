import React, { Component } from 'react';

class Vendor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vendors: []
        }
    }

    async componentDidMount () {
    const response = await fetch("http://cors-anywhere.herokuapp.com/https://mysterio-vendor.herokuapp.com/api/v1/vendors");
    const data = await response.json();
    this.setState({ vendors: data.vendors });
    // console.log(this.state.vendors)
    // console.log(data);    
  }

    render() { 
        const { vendors } = this.state
        console.log(vendors)
        return (
            <div className ="container">
                <div className="col">  
                        <div className='col-md-6'> 
                            {vendors.map((vendor) => (
                        <div class="card">
                        <div class="card-body">
                        <div className= "vendors__title">
                            <h5>Name: {vendor.name}</h5>
                        </div>
                            <h6 className="vendors__subtitle">Email: {vendor.email}</h6>
                            <p className="vendors__subtitle">Mobile: {vendor.mobile}</p>
                            <p className="vendors__subtitle">Address: {vendor.address} {vendor.city}</p>
                            <p className="vendors__subtitle">State: {vendor.state}</p>
                            <p className="vendors__subtitle">Country: {vendor.country}</p>
                            <p className="vendors__subtitle">{vendor.image.url}</p>
                        </div>
                        </div>
                    ))}
                        </div>
                </div>
            </div>
        )
    }
}
 export default Vendor;