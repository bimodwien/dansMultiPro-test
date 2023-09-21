import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import './landing.css'
import { useFetch } from '../../helper';

const Landing = () => {

  const [page, setPage] = useState(1)
  const [inputDescription, setInputDescription] = useState('')
  const [inputLocation, setInputLocation] = useState('')


  const isFullTime = true

  const dataFetch = useFetch({
    url: `https://dev6.dansmultipro.com/api/recruitment/positions.json?page=${page}`,
    defaultData: []
  })

  function handleFilterDescription(params) {
    setInputDescription(params.target.value)
  }

  function handleFilterLocation(params) {
    setInputLocation(params.target.value)
  }

  function handleSearch(params) {
    
  }

  //masih belum bisa
  function handlePagination() {
    setPage(page+1);
  }

  return (
    <>
      <Navbar/>
      <form action="">
        <div className='form-action'>
          <div className='form-description'>
            <div className='form-description-title'>Job Description</div>
            <input type="text" onChange={handleFilterDescription} className='form-description-input' placeholder='Filter by title, benefits, companies, expertise' />
          </div>
          <div>
            <div className='form-description-title'>Location</div>
            <input type="text" onChange={handleFilterLocation} className='form-description-input' placeholder='Filter by city, state, zip code or country' />
          </div>
          <div className='form-checkbox'>
            <input type="checkbox" name="" id="" />
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
            return <div className='card-data'>
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