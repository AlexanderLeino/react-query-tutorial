import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
  }

const addSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheroes', hero)
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(['super-heroes'], fetchSuperHeroes, {
        staleTime: 1000,
        onSuccess,
        onError,
      })
}

const fetchSuperHero = async (id) => {
   let superHeroes = await axios.get('http://localhost:4000/superheroes')
    superHeroes.filter(hero => hero.id === id)

}

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries('super-heroes')
    //   
    // }
    onMutate: async (newHero) => {
      await queryClient.cancelQueries(['super-heroes'])
      const previousHeroData = queryClient.getQueryData(['super-heroes'])
      queryClient.setQueryData(['super-heroes'], (oldQueryData) => {
            return {
              ...oldQueryData,
              data: [...oldQueryData.data, {id: oldQueryData?.data?.length + 1, ...newHero}]
            }
          })
          return {
            previousHeroData
          }
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData(['super-heroes'], context.previousHeroData)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['super-heroes'])
    },
  })
}