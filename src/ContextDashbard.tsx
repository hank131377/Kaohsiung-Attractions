import React, { createContext, useState, useContext } from 'react'
import { useQuery } from 'react-query'

import Loading from './components/Loading/Loading'

const getData = async () => {
  const res = await fetch(
    'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c',
    {
      method: 'get',
    }
  )
  const { data } = await res.json()
  const { Info } = data.XML_Head.Infos
  return Info
}

type StateContextType = {
  data: []
}

export const StateContext = createContext<StateContextType | null>(null)

type ContextProviderProps = {
  children: React.ReactNode
}

export const ContextDashbard = ({ children }: ContextProviderProps) => {
  const { data, isLoading, isSuccess } = useQuery(['data'], getData, {})
  if (isLoading) {
    return (
      <h1>
        <Loading />
      </h1>
    )
  }

  return (
    <StateContext.Provider value={{ data }}>{children}</StateContext.Provider>
  )
}

export const useContextValue = () => useContext(StateContext)
