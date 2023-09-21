import React, { useRef, useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import './landing.css'
import { useFetch } from '../../helper';
import { Link } from 'react-router-dom';

const Landing = () => {

  const [page, setPage] = useState(1)
  const [filterDescription, setFilterDescription] = useState('')
  const [filterLocation, setFilterLocation] = useState('')
  const [filterFullTime, setFilterFullTime] = useState(false)

  const input1 = useRef(null)
  const input2 = useRef(null)
  const inputCheck = useRef(null)
  const params = [`page=${page}`,filterDescription, filterLocation, filterFullTime].filter((item) => {
    return !!item
  })

  const dataFetch = useFetch({
    url: `https://dev6.dansmultipro.com/api/recruitment/positions.json?${params.join('&')}`,
    defaultData: [],
    shouldContinue: () => page !== 1
  })

  function handleSearch(event) {
    event.preventDefault()
    const description = input1.current.value;
    const location = input2.current.value;
    const checkBox = inputCheck.current.checked;
    if(description) {
      setFilterDescription(`description=${description.toLowerCase()}`)
    }
    if(location) {
      setFilterLocation(`location=${location.toLowerCase()}`)
    }
    if(checkBox) {
      setFilterFullTime(`full_time=${checkBox}`)
    }
    setPage(1)
  }
  

  function handlePagination() {
    setPage(page+1);
  }

  return (
    <>
      <Navbar/>
      <form>
        <div className='form-action'>
          <div className='form-description'>
            <div className='form-description-title'>Job Description</div>
            <input type="text" ref={input1} className='form-description-input' placeholder='Filter by title, benefits, companies, expertise' />
          </div>
          <div>
            <div className='form-description-title'>Location</div>
            <input type="text" ref={input2} className='form-description-input' placeholder='Filter by city, state, zip code or country' />
          </div>
          <div className='form-checkbox'>
            <input type="checkbox" name="" id="" ref={inputCheck} />
            <div className='form-description-title'>Full Time Only</div>
          </div>
          <div className='form-button-placement'>
            <button className='form-button' onClick={handleSearch}>Search</button>
          </div>
        </div>
      </form>

      <div className='content-table'>
        <div>
          <h2>Job List</h2>
          {dataFetch?.map((data) => {
            return <Link to={`detail/${data.id}`}>
              <div key={data.id} className='card-data'>
                <div>
                  <div className='card-data-title'>{data.title}</div>
                  <div className='card-data-wrap'>
                    <div className='card-data-company'>{data.company}</div>
                    <div> - </div>
                    <div className='card-data-type'>{data.type}</div>
                  </div>
                </div>
                <div className='card-data-location'>
                  <div className='card-data-location'>{data.location}</div>
                  <div className='card-data-about'>about 2 days</div>
                </div>
              </div>
            </Link>
          })}
          <div className='card-data-button-placement'>
            <button className='card-data-button' onClick={handlePagination}>More Jobs</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Landing;