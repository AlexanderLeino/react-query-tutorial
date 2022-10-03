import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = channelId => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueries = ({email}) => {

   const {data: user} = useQuery(['user', email], () => fetchUserByEmail(email))

   const channelId = user?.data?.channelId

   useQuery(['courses', channelId], {
    enabled: !!channelId,
   }, () => fetchCoursesByChannelId(channelId))

  return (
    <div>DependentQueries</div>
  )
}
