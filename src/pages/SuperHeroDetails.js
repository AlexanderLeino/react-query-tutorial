import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import React from 'react'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

export const SuperHeroDetails = () => {
    const  {id}  = useParams()
    console.log('HERO ID', id)
    const {isLoading, data, isError, error  } = useSuperHeroData(id)

  return (
    <>
        {
            isLoading ?
            <div>Loading....</div>
            :
            isError ? 
            <div>{error.message}</div>
            :
            <div>{data?.data.name} - {data?.data.alterEgo}</div>
        }
    </>
  )
}
