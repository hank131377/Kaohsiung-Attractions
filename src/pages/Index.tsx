import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Options from '../components/Options'
import Content from '../components/Content'
import Single from '../components/Single'
import { useContextValue } from '../ContextDashbard'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Index = () => {
  let { id } = useParams()
  const filterString = useSelector(
    (store: {
      banner: {
        searchValue: string
      }
    }) => {
      return store.banner.searchValue
    }
  )

  const filterOption = useSelector(
    (store: {
      options: {
        locationValue: string
      }
    }) => {
      return store.options.locationValue
    }
  )

  const data = useContextValue()?.data
  let areas: any = []
  data?.forEach((v: { Add: string }) => {
    if (v.Add.indexOf('那瑪夏') !== -1) {
      areas.push(v.Add.slice(6, 10))
    } else {
      areas.push(v.Add.slice(6, 9))
    }
  })
  const area = areas.filter((v: string, i: number) => {
    return areas.indexOf(v) == i
  })
  const filterData = data
    ?.filter((v: { Add: string }) => {
      return v.Add.indexOf(filterOption) !== -1
    })
    .filter((v: { Name: string }) => {
      return v.Name.indexOf(filterString) !== -1
    })

  return (
    <>
      <Banner />
      <div className="d-flex flex-column flex-sm-row">
        {!!id ? (
          <>
            <div className="d-none d-sm-block me-5">
              <Options area={area} />
            </div>
            <Single data={data} />
          </>
        ) : (
          <>
            <Options area={area} />
            <Content filterData={filterData} />
          </>
        )}
      </div>
    </>
  )
}

export default Index
