import React, { Component } from 'react';
import Layout from '../src/components/Layout';
import List from '../src/components/List';
import Button from '../src/components/Button';
import { API_ENDPOINTS } from '../settings';

class ShoppingCentersPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [],
    }
  }

  async getShoppingCenters (){
    const token = localStorage.getItem("token");
    const config = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const fetchResponse = await fetch(API_ENDPOINTS.shoppingCenters, config);
      const data = await fetchResponse.json();
      if (data) {
        this.setState({ data })
      }
    } catch (error) {
      return error;
    }
  }

  UNSAFE_componentWillMount() {
    this.getShoppingCenters();
  }

  render() {
    const { data } = this.state;
    return (
      <Layout>
        <h1>Shopping Centers</h1>
        {data && (
          <List data={data}/>
        )}
        <Button title="Back" />
      </Layout>
    );
  }
}

export default ShoppingCentersPage
