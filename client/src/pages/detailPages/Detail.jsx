import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchDetail } from '../../helper';
import Navbar from '../../components/navbar/Navbar';
import './detail.css'
const Detail = () => {

    const parameter = useParams();

    const dataDetail = useFetchDetail({
        url: `https://dev6.dansmultipro.com/api/recruitment/positions/${parameter.positionId}`,
        defaultData: {},
    })


  return (
    <>
        <Navbar/>
        <div>
            <Link to='/'>Back</Link>
        </div>
        <div className='detail-main'>
            <div className='detail-nav'>
                <div>{dataDetail.type} / {dataDetail.location}</div>
                <div>{dataDetail.title}</div>
            </div>

            <div className='detail-content'>
                <div className='detail-description' dangerouslySetInnerHTML={{ __html: dataDetail.description  }}></div>
                <div className='detail-companies'>
                    <div></div>
                    <div></div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Detail