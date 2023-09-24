import React from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'
import { setSearchValue } from '../slice/bannerList'
import { setLocationValue } from '../slice/optionsList'
import Paginate from './Paginate'
type Prop = {
  filterData?: any
}

const Content = ({ filterData }: Prop) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageData = filterData.filter((v: any, i: number) => {
    let last = Number(searchParams.get('page')) * 3
    let first = last - 3
    return i + 1 > first && i + 1 <= last
  })

  const banner = useSelector((store: { banner: { searchValue: string } }) => {
    return store.banner
  })
  const { searchValue } = banner
  const options = useSelector(
    (store: {
      options: {
        locationValue: string
      }
    }) => {
      return store.options
    }
  )
  const { locationValue } = options
  const dispatch = useDispatch()
  return (
    <div className="content">
      <div className="content__search">
        <h2>
          顯示 <span>{filterData.length}</span> 筆結果
        </h2>
        <div className="d-flex content__search--title flex-wrap">
          {!!searchValue ? (
            <p
              onClick={() => {
                dispatch(
                  setSearchValue({
                    searchValue: '',
                  })
                )
              }}
            >
              {searchValue}
              <RxCrossCircled style={{ fontSize: '20px', marginLeft: '5px' }} />
            </p>
          ) : (
            ''
          )}
          {!!locationValue ? (
            <p
              onClick={() => {
                dispatch(setLocationValue({ locationValue: '' }))
              }}
            >
              {locationValue}
              <RxCrossCircled style={{ fontSize: '20px', marginLeft: '5px' }} />
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
      {pageData.map(
        (v: {
          Picture1: string
          Name: string
          Toldescribe: string
          Id: string
          Add: string
          Tel: string
          Opentime: string
        }) => {
          return (
            <div
              className="d-flex flex-column flex-lg-row content__card pt-3 pt-lg-0 mb-3"
              key={v.Id}
            >
              <div className="content__card--img">
                <img src={v.Picture1} alt="" />
              </div>
              <div className="content__card--article p-3 p-lg-0">
                <NavLink
                  to={`/${v.Name}`}
                  style={{
                    cursor: 'pointer',
                    fontSize: '36px',
                    textDecoration: 'none',
                  }}
                >
                  {v.Name}
                </NavLink>
                <p>地址：{v.Add}</p>
                <p>特色：{v.Toldescribe}</p>
                <p>電話：{v.Tel}</p>
                <p>開放時間：{v.Opentime}</p>
              </div>
            </div>
          )
        }
      )}

      <Paginate itemsPerPage={3} filterData={filterData} />
    </div>
  )
}

export default Content
