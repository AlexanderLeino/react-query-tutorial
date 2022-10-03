import React, {useEffect, useState} from 'react'
import { useAddSuperHeroData, useSuperHeroesData } from '../hooks/useSuperHeroesData'
import axios from 'axios'
import { Link } from 'react-router-dom'





export const RQSuperHeroes = () => {
  const [superHero, setSuperHero] = useState({})
  const { mutate } = useAddSuperHeroData()
  
  const handleOnChange = (e) => {
    let name = e.target.name 
    let value = e.target.value

    setSuperHero({...superHero, [name]: value})
  
  }

  const handleOnClick = () => {
      mutate(superHero)
  }

  const onSuccess = () => {
    console.log('Perform side effect after data Fetching')
  }

  const onError = () => {
    console.log('Encountering error')
  }

  const {isLoading , data, isError, error , isFetching, refetch} = useSuperHeroesData(onSuccess, onError)
  
  return (
   <>
   <h2>RQ SUPER HEROES PAGE</h2>
   <div>
    <input name='name' onChange={handleOnChange} value={superHero.name || ''}/>
    <input name='alterEgo' onChange={handleOnChange} value={superHero.alterEgo || ''}/>
   </div>
  <div style={{display: 'flex', flexDirection: 'column', width: 'fit-content'}}>
   <button onClick={handleOnClick} style={{color:'black', backgroundColor: 'coral'}}>Create Hero</button>
   <button onClick={refetch} style={{backgroundColor: 'lightBlue', marginTop: '10px'}}>Fetch Heroes</button>
  </div>
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
      {data?.data.map((hero) => {
        return <Link to={`/super-heroes/${hero.id}`}><div key={hero.name}>{hero.name}</div></Link>
      })}

      </>

    }
   </>
  )
  }
