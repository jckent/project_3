import React, { Component } from "react";
import axios from 'axios';

class ProviderList extends Component {
  state = {
    providers: []
  }
  componentDidMount(){
    axios.get('/api/providers').then (res =>{
      this.setState({
        providers:res.data
      }) 
      console.log(res.data)
    })
  }
  render(){
    
    return (
      <div>
      
        { this.state.providers.map(provider=>(
            <div>
              {provider.name}<br></br>
              {provider.specialty}<br></br>
              {provider.url}<br></br>
              {provider.address}<br></br>
              {provider.insurance}<br></br>
              {provider.phone}<br></br>
              {provider.newPatient}<br></br>
            </div>
        )) }
      </div>
    );
  }
}

export default ProviderList;