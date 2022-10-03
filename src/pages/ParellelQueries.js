import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
    return axios.get('http://localhost:4000/friends')
}

export const ParellelQueries = () => {
    const {data: superHeroes} = useQuery(['super-heroes'], fetchSuperHeroes)
    const {data: friends } = useQuery(['friends'], fetchFriends)
  return (
    <div>ParellelQueries</div>
  )
  }
