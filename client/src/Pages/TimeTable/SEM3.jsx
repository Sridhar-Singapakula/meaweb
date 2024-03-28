import React from 'react'
import './style.css'

const SEM3 = () => {
    return (
        <div>

            <div className='timetablemain'>

                <h1>SEMESTER 3</h1>
                {/* <p>Holidays and Daily Observances in the United States</p> */}
                <ul>
                <li><time datetime="2022-02-01" style={{fontWeight: 'bold',  fontSize: '30px' }}>TIME</time></li>
                    <li><time datetime="2022-02-02" style={{fontWeight: 'bold',  fontSize: '20px' }}>8:30 - 9:25</time></li>
                    <li><time datetime="2022-02-03" style={{fontWeight: 'bold',  fontSize: '20px' }}>9:30 - 10:25</time></li>
                    <li><time datetime="2022-02-04" style={{fontWeight: 'bold',  fontSize: '20px' }}>10:35 - 11:30</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>11:35 - 12:30</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>2 PM</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>TO</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>5 PM</time></li>
                    {/* <li><time datetime="2022-02-06">2 - 5</time></li> */}
                    {/* <li><time datetime="2022-02-07">7</time></li> */}
                    <li><time datetime="2022-02-08" style={{fontWeight: 'bold',  fontSize: '20px' }}>MONDAY</time></li>
                    <li><time datetime="2022-02-09"></time></li>
                    <li><time datetime="2022-02-10">EC 101</time>S1, S2, S3</li>
                    <li><time datetime="2022-02-11">ME 223</time>S2, S3</li>
                    <li><time datetime="2022-02-12">ME 209</time>S1, S2, S3</li>
                    <li><time datetime="2022-02-13"></time></li>
                    <li><time datetime="2022-02-14">LAB S1</time></li>
                    <li><time datetime="2022-02-14"></time></li>
                    <li><time datetime="2022-02-15" style={{fontWeight: 'bold',  fontSize: '20px' }}>TUESDAY</time></li>
                    <li><time datetime="2022-02-12">ME 209</time>S1, S2, S3</li>
                    <li><time datetime="2022-02-09"></time></li>
                    <li><time datetime="2022-02-10">EC 101</time>S1, S2, S3</li>
                    <li><time datetime="2022-02-11">ME 223</time>S2, S3</li>
                    <li><time datetime="2022-02-20"></time></li>
                    <li><time datetime="2022-02-21"></time></li>
                    <li><time datetime="2022-02-21"></time></li>

                </ul>
                <ul style={{display:'grid', gridTemplateColumns: '1fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr '}}>

                    <li><time datetime="2022-02-22" style={{fontWeight: 'bold',  fontSize: '20px' }}>WEDNESDAY</time></li>
                    <li><time datetime="2022-02-23"></time></li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-24">ME 223</time>S1</li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-25">ME 221</time>S1, S2, S3</li>
                    <li><time datetime="2022-02-26"></time></li>
                    <li><time datetime="2022-02-27"></time></li>
                    {/* <li><time datetime="2022-02-27"></time></li> */}
                    <li><time datetime="2022-02-27"></time></li>
                </ul>
                <ul>
                    <li><time datetime="2022-02-23" style={{fontWeight: 'bold',  fontSize: '20px' }}>THURSDAY</time></li>
                    
                    <li><time datetime="2022-02-11">ME 223</time>S2, S3</li>
                    <li><time datetime="2022-02-12">ME 209</time>S1, S2, S3</li>
                    <li><time datetime="2022-02-09"></time></li>
                    <li><time datetime="2022-02-10">EC 101</time>S1, S2, S3</li>
                    <li><time datetime="2022-02-28"></time></li>
                    <li><time datetime="2022-02-14">LAB S2</time></li>
                    <li><time datetime="2022-02-23"></time></li>
                </ul>
                <ul style={{display:'grid', gridTemplateColumns: '1fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr '}}>
                    <li><time datetime="2022-02-24" style={{fontWeight: 'bold',  fontSize: '20px' }}>FRIDAY</time></li>
                    <li><time datetime="2022-02-24"></time></li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-24">ME 223</time>S1</li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-25">ME 221</time>S1, S2, S3</li>
                    <li><time datetime="2022-02-24"></time></li>
                    <li><time datetime="2022-02-24"></time></li>
                    {/* <li><time datetime="2022-02-21"></time></li> */}
                    <li><time datetime="2022-02-24"></time></li>
                </ul>
            </div>

        </div>
    )
}

export default SEM3
