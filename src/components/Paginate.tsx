import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

function Paginate({ itemsPerPage, filterData }: any) {
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
  const { locationValue } = options
  const [searchParams, setSearchParams] = useSearchParams()
  const items = filterData
  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, items.length])
  useEffect(() => {
    setSearchParams({ page: `1` })
  }, [locationValue])
  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // )
    setItemOffset(newOffset)
    setSearchParams({ page: `${event.selected + 1}` })
  }
  return (
    <>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Paginate
