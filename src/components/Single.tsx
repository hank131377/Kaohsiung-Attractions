import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { MdOutlineLocationOn, MdCalendarMonth } from 'react-icons/md'

type Prop = {
  data?: any
}

const Single = ({ data }: Prop) => {
  const navigate = useNavigate()
  let { id } = useParams()
  const onceData = data?.filter((v: { Name: string }) => {
    return v.Name === id
  })

  return (
    <div className="single">
      <nav className="single__breadcrumb">
        <ol className="d-flex p-3">
          <li className="m-2">
            <span
              onClick={(e) => {
                navigate('/')
              }}
            >
              首頁
            </span>
          </li>
          {id ? (
            <>
              <span className="m-2" style={{ color: '#000000' }}>
                /
              </span>{' '}
              <li className="m-2" style={{ color: '#000000' }}>
                {id}
              </li>{' '}
            </>
          ) : (
            ''
          )}
        </ol>
      </nav>
      {onceData.map(
        (v: {
          Picture1: string
          Picdescribe1: string
          Name: string
          Add: string
          Id: string
          Opentime: string
          Toldescribe: string
        }) => {
          return (
            <div className="single__card mb-5" key={v.Id}>
              <img src={v.Picture1} alt={v.Picdescribe1} />
              <div className="mx-5 mt-3">
                <h3>{v.Name}</h3>
                {/* <div className="mb-3">
                  <span className="pe-3 py-2">Ethan Foster</span>
                  <span
                    className="px-3 py-2"
                    style={{
                      background: '#D7D7D7',
                      borderRadius: '100px',
                      fontStyle: 'italic',
                      color: '#FFFFFFF',
                    }}
                  >
                    Entertainment
                  </span>
                </div> */}
                <div className="mb-3">
                  <span className="pe-3">
                    <MdOutlineLocationOn />
                    {v.Name}
                  </span>
                  <span className="pe-3">
                    <MdCalendarMonth />
                    {v.Opentime}
                  </span>
                </div>
                <p className="pb-5">{v.Toldescribe}</p>
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default Single
