import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchValue } from '../slice/bannerList'

const Banner = () => {
  const banner = useSelector((store: { banner: { searchValue: string } }) => {
    return store.banner
  })
  const { searchValue } = banner
  const dispatch = useDispatch()
  return (
    <div className="banner d-flex align-items-center flex-column flex-sm-row">
      <div className="banner__title">
        <h1>HaveFun</h1>
      </div>
      <div className="banner__search d-flex">
        <AiOutlineSearch className="banner__search--icon" />
        <input
          type="text"
          className="banner__search--input"
          defaultValue={searchValue}
          placeholder="請搜尋關鍵字"
          onChange={(e) => {
            dispatch(setSearchValue({ searchValue: e.target.value }))
          }}
        />
      </div>
    </div>
  )
}

export default Banner
