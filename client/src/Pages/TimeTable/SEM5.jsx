import React from 'react'
import './style.css'

const SEM5 = () => {
    return (
        <div>

            <div className='timetablemain'>

                <h1>SEMESTER 5</h1>
                {/* <p>Holidays and Daily Observances in the United States</p> */}
                <ul>
                <li><time datetime="2022-02-01" style={{fontWeight: 'bold',  fontSize: '30px' }}>TIME</time></li>
                    <li><time datetime="2022-02-02" style={{fontWeight: 'bold',  fontSize: '20px' }}>8:30 - 9:25</time></li>
                    <li><time datetime="2022-02-03" style={{fontWeight: 'bold',  fontSize: '20px' }}>9:30 - 10:25</time></li>
                    <li><time datetime="2022-02-04" style={{fontWeight: 'bold',  fontSize: '20px' }}>10:35 - 11:30</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>11:35 - 12:30</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>2:00 - 5:00</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>5:00-5:30</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>5:30-7:00</time></li>
                    {/* <li><time datetime="2022-02-06">2 - 5</time></li> */}
                    {/* <li><time datetime="2022-02-07">7</time></li> */}
                    <li><time datetime="2022-02-08" style={{fontWeight: 'bold',  fontSize: '20px' }}>MONDAY</time></li>
                    <li><time datetime="2022-02-09">ME 311</time>S1 - LH 301</li>
                    <li><time datetime="2022-02-10">ME 346</time>S1 - IC2</li>
                    <li><time datetime="2022-02-11">HS 303</time>LA 002</li>
                    <li><time datetime="2022-02-12">ME 338</time>S2 - LC 201</li>
                    <li><time datetime="2022-02-13"></time></li>
                    <li><time datetime="2022-02-14"></time></li>
                    <li><time datetime="2022-02-14">ME 617</time>LT 004</li>
                    <li><time datetime="2022-02-15" style={{fontWeight: 'bold',  fontSize: '20px' }}>TUESDAY</time></li>
                    <li><time datetime="2022-02-12">ME 338</time>S2 - LC 201</li>
                    <li><time datetime="2022-02-09">ME 311</time>S1 - LH 301</li>
                    <li><time datetime="2022-02-10">ME 346</time>S1 - IC2</li>
                    <li><time datetime="2022-02-11">HS 303</time>LA 002</li>
                    <li><time datetime="2022-02-21">LAB</time></li>
                    <li><time datetime="2022-02-20"></time></li>
                    <li><time datetime="2022-02-21"></time></li>
                </ul>
                <ul style={{display:'grid', gridTemplateColumns: '1fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr '}}>

                    <li><time datetime="2022-02-22" style={{fontWeight: 'bold',  fontSize: '20px' }}>WEDNESDAY</time></li>
                    <li><time datetime="2022-02-23"></time></li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-24">EE 617</time>EEG 303</li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-25">SC 649</time>LT 003</li>
                    <li><time datetime="2022-02-26"></time></li>
                    {/* <li><time datetime="2022-02-27"></time></li> */}
                    <li><time datetime="2022-02-27"></time></li>
                    <li><time datetime="2022-02-27"></time></li>
                </ul>
                <ul>
                    <li><time datetime="2022-02-23" style={{fontWeight: 'bold',  fontSize: '20px' }}>THURSDAY</time></li>
                    
                    <li><time datetime="2022-02-11">HS 303</time>LA 002</li>
                    <li><time datetime="2022-02-12">ME 338</time>S2 - LC 201</li>
                    <li><time datetime="2022-02-09">ME 311</time>S1 - LH 301</li>
                    <li><time datetime="2022-02-10">ME 346</time>S1 - IC2</li>
                    <li><time datetime="2022-02-14"></time></li>
                    <li><time datetime="2022-02-28"></time></li>
                    <li><time datetime="2022-02-23">ME 617</time>LT 004</li>
                </ul>
                <ul style={{display:'grid', gridTemplateColumns: '1fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr '}}>
                    <li><time datetime="2022-02-24" style={{fontWeight: 'bold',  fontSize: '20px' }}>FRIDAY</time></li>
                    <li><time datetime="2022-02-24"></time></li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-24">EE 617</time>EEG 303</li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-25">SC 649</time>LT 003</li>
                    <li><time datetime="2022-02-24"></time></li>
                    <li><time datetime="2022-02-24">LAB</time></li>
                    {/* <li><time datetime="2022-02-21"></time></li> */}
                    <li><time datetime="2022-02-24"></time></li>
                </ul>

            </div>

        </div>
    )
}

export default SEM5
