import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
export const RQSuperHeroes = () => {
  const {isLoading , data } = useQuery(['super-heroes'], () => {
    return axios.get('http://localhost:4000/superheroes')
  })
  console.log(data)


  return (
   <>
   <h2>RQ SUPER HEROES PAGE</h2>
   {isLoading 
      ? 
      <div>Loading...</div> 
      :
      <>
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
      </>

    }
   </>
  )
  }
