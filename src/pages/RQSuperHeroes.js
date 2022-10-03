import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroes = () => {

  const onSuccess = () => {
    console.log('Perform side effect after data Fetching')
  }

  const onError = () => {
    console.log('Encountering error')
  }

  const {isLoading , data, isError, error , isFetching, refetch} = useQuery(['super-heroes'], fetchSuperHeroes, {
    staleTime: 1000,
    enabled: false,
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data?.data.map(superHero => superHero.name)
      return superHeroNames
    }
   
  })
  
  return (
   <>
   <h2>RQ SUPER HEROES PAGE</h2>
   <button onClick={refetch}>Fetch Heroes</button>
   {isLoading || isFetching 
      ? 
      <div>Loading...</div> 
      :
    isError ?
      `${error.message}`
    :
      <>
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })} */}
      {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>
      })}

      </>

    }
   </>
  )
  }
