import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import './FetchData.css'
const FetchData = () => {
  const {data,setData} = useContext(AppContext);
  const [loading,setLoading]=useState(false);
  async function fetchData() {
    setLoading(true);
    let url = "https://api.quicksell.co/v1/internal/frontend-assignment";
    try{
        const res = await fetch(url);
        const response = await res.json();
        setData(response);
    }
    catch(err)
    {
        console.log("error while getting data from API")
    }
    setLoading(false);
    }
    useEffect(()=>{fetchData();},[]);
  return (
    <div>
      {loading ? (
        <div className='spinner'></div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FetchData
