import React, { useState } from 'react'
import moment from 'moment/moment'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import {
  setLocationOption,
  setLocationValue,
  setDateOption,
} from '../slice/optionsList'
type testType = {
  name: string
}
type Prop = {
  area?: any
}
const Options = ({ area }: Prop) => {
  const options = useSelector(
    (store: {
      options: {
        locationOption: boolean
        locationValue: string
        dateOption: boolean
      }
    }) => {
      return store.options
    }
  )
  const dispatch = useDispatch()
  const { locationOption, locationValue, dateOption } = options
  {
    /* api無特色 */
  }
  // const [categoriesOption, setCategoriesOption] = useState<boolean>(false)
  // const [clickValue, setClickValue] = useState<string>('')
  const select: Array<testType> = [
    {
      name: 'all',
    },
    {
      name: 'Entertainment',
    },
  ]

  return (
    <div className="options">
      <div
        className="options__select"
        style={{
          paddingBottom: locationOption ? '30px' : '',
          backgroundColor: locationOption ? '#EBEBEB' : '',
        }}
      >
        <div
          className="d-flex justify-content-between options__select--cursor"
          onClick={() => {
            if (window.innerWidth < 576) {
              dispatch(setLocationOption({ locationOption: !locationOption }))
            } else {
              dispatch(setLocationOption({ locationOption: false }))
            }
          }}
        >
          <p>地區</p>
          {locationOption ? (
            <AiOutlinePlus className="options__icon" />
          ) : (
            <AiOutlineMinus className="options__icon" />
          )}
        </div>
        <select
          className="options__select--change"
          style={{ display: locationOption ? 'block' : '' }}
          onChange={(e) => {
            dispatch(setLocationValue({ locationValue: e.target.value }))
          }}
          value={locationValue}
        >
          <option value="">全部地區</option>
          {area.map((v: string) => {
            return (
              <option value={v} key={v}>
                {v}
              </option>
            )
          })}
        </select>
      </div>
      <div
        className="options__date"
        style={{
          paddingBottom: dateOption ? '30px' : '',
          backgroundColor: dateOption ? '#EBEBEB' : '',
        }}
      >
        <div
          className="d-flex justify-content-between options__date--cursor"
          onClick={() => {
            if (window.innerWidth < 576) {
              dispatch(setDateOption({ dateOption: !dateOption }))
            } else {
              dispatch(setDateOption({ dateOption: false }))
            }
          }}
        >
          <p>Date</p>
          {dateOption ? (
            <AiOutlinePlus className="options__icon" />
          ) : (
            <AiOutlineMinus className="options__icon" />
          )}
        </div>
        <div
          className=" options__date--change"
          style={{ display: dateOption ? 'flex' : '' }}
        >
          <div>
            <label>from</label>
            <br />
            <label>to</label>
          </div>
          <div className="ms-3 me-3">
            <input type="date" defaultValue={moment().format('y-MM-DD')} />
            <br />
            <input type="date" />
          </div>
        </div>
      </div>
      {/* api無特色 */}
      {/* <div
        className="options__categories"
        style={{
          backgroundColor: categoriesOption ? '#EBEBEB' : '',
        }}
      >
        <div
          className="d-flex justify-content-between options__categories--cursor"
          onClick={() => {
            if (window.innerWidth < 576) {
              setCategoriesOption(!categoriesOption)
            } else {
              setCategoriesOption(false)
            }
          }}
        >
          <p>Categories</p>
          {categoriesOption ? (
            <AiOutlinePlus className="options__icon" />
          ) : (
            <AiOutlineMinus className="options__icon" />
          )}
        </div>
        <div
          className="options__categories--change"
          style={{
            display: categoriesOption ? 'block' : '',
            paddingBottom: categoriesOption ? '30px' : '',
          }}
        >
          {select.map((v, i) => {
            return (
              <React.Fragment key={v.name}>
                <BsFillCheckSquareFill
                  className={
                    clickValue == v.name
                      ? 'options__categories--radioClicked'
                      : 'options__categories--radio'
                  }
                  onClick={() => {
                    setClickValue(v.name)
                  }}
                />
                <input type="radio" name="sort" id={v.name} value={v.name} />
                <label htmlFor={v.name}>{v.name}</label>
                <br />
              </React.Fragment>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Options
