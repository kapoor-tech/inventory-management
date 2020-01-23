import React, { useState, useEffect } from 'react';
import Layout from '../src/components/Layout';
import List from '../src/components/List';
import Button from '../src/components/Button';
import { useRouter } from 'next/router';
import { API_ENDPOINTS } from '../settings';

function AssetsPage() {
  const [asset, setAsset] = useState([]);
  const router = useRouter();
  const { shoppingCenterId } = router.query;
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch(
      `${API_ENDPOINTS.assetsByShoppingCenter}${shoppingCenterId}`,
      {
        method: "GET",
        headers: new Headers({
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        setAsset(response);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Layout>
      <h1>Assets</h1>
      <List url={null} data={asset || []}/>
      <Button title="Back" />
    </Layout>
  );
}

export default AssetsPage;
