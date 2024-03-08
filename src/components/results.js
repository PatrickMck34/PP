import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as sectionActions from '../store/section'

function Results () {
    const dispatch = useDispatch()
const results = useSelector((state) => state.section.section3)
const zip = useSelector((state) => state.section.zipCode)
const providers = useSelector((state) => state.provider.providers)
const res = Object.values(results)
const data = Object.values(providers)
console.log(data)
useEffect(() => {
    dispatch(sectionActions.getProviders(results))
        
    
    
}, [results])
    return (
       <>
          
      {data.map((provider) => (
          <div key={provider.id}>
          <h2 className="text-2xl text-black">{provider.Name}</h2>
          <h2 className="text-2xl text-black">{provider.Address}</h2>
          <h2 className="text-2xl text-black">{provider.Phone}</h2>
          <h2 className="text-2xl text-black">{provider.zipCode}</h2>
       
        </div>
      ))}
        </>
   
        
        )
    }
    export default Results