import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetchDetail } from '../../helper';
import Navbar from '../../components/navbar/Navbar';
import './detail.css'
const Detail = () => {

    const parameter = useParams();

    const dataDetail = useFetchDetail({
        url: `http://localhost:3001/data/${parameter.positionId}`,
        defaultData: {},
    })


  return (
    <>
        <Navbar/>
        <div className='detail-back'>
            <Link to='/' className='detail-link'>Back</Link>
        </div>
        <div className='detail-main'>
            <div className='detail-nav'>
                <div className='detail-type-loc'>{dataDetail.type} / {dataDetail.location}</div>
                <div className='detail-title'>{dataDetail.title}</div>
            </div>

            <div className='detail-content'>
                <div className='detail-description' dangerouslySetInnerHTML={{ __html: dataDetail.description  }}></div>
                <div className='detail-companies'>
                    <div className='detail-companies-table'>
                        <div className='detail-jobs'>
                            <div className='detail-company-name'>{dataDetail.company}</div>
                            <div className='detail-company-jobs'>1 other jobs</div>
                        </div>
                        <div>
                            <div className='detail-logo'>
                                <img src={dataDetail.company_logo} alt="Logo" className='detail-company-logo' />
                            </div>
                            <div className='detail-company-url'>{dataDetail.company_url}</div>
                        </div>
                    </div>
                    <br />
                    <div className='detail-companies-table coloring-yellow'>
                        <div className='detail-apply'>How To Apply</div>
                        <div dangerouslySetInnerHTML={{__html: dataDetail.how_to_apply}} className='detail-how-to'></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Detail