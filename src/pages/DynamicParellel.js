import axios from 'axios'
import React from 'react'
import { useQuery, useQueries } from '@tanstack/react-query'

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
export const DynamicParellel = ({heroIds}) => {
    console.log(heroIds)
    const queryResults = useQueries({
        queries: heroIds.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHero(id)
            }
        })
    })
    console.log( {queryResults })
  return (
    <div>DynamicParellel</div>
  )
}
