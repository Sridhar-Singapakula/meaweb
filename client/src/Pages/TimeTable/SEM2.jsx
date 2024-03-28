import React from 'react'
import './style.css'

const SEM2 = () => {
    return (
        <div>

            <div className='timetablemain'>

                <h1 >SEMESTER 2</h1>
                {/* <p>Holidays and Daily Observances in the United States</p> */}
                <ul>
                    <li><time datetime="2022-02-01" style={{fontWeight: 'bold',  fontSize: '30px' }}>TIME</time></li>
                    <li><time datetime="2022-02-02" style={{fontWeight: 'bold',  fontSize: '20px' }}>8:30 - 9:25</time></li>
                    <li><time datetime="2022-02-03" style={{fontWeight: 'bold',  fontSize: '20px' }}>9:30 - 10:25</time></li>
                    <li><time datetime="2022-02-04" style={{fontWeight: 'bold',  fontSize: '20px' }}>10:35 - 11:30</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>11:35 - 12:30</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>3:00 - 4:00</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>4:00 - 5:00</time></li>
                    <li><time datetime="2022-02-05" style={{fontWeight: 'bold',  fontSize: '20px' }}>8:30 - 10:30</time></li>
                    <li><time datetime="2022-02-08" style={{fontWeight: 'bold',  fontSize: '20px' }}>MONDAY</time></li>
                    <li><time datetime="2022-02-09">MA 110</time>LA 201</li>
                    <li><time datetime="2022-02-10"></time></li>
                    <li><time datetime="2022-02-11"></time></li>
                    <li><time datetime="2022-02-12">ME 104</time>S1 - LC301 , S2 - LC302</li>
                    <li><time datetime="2022-02-13"></time></li>
                    <li><time datetime="2022-02-14"></time></li>
                    <li><time datetime="2022-02-14"></time></li>
                    <li><time datetime="2022-02-15" style={{fontWeight: 'bold',  fontSize: '20px' }}>TUESDAY</time></li>
                    <li><time datetime="2022-02-16">ME 104</time>S1 - LC301 , S2 - LC302</li>
                    <li><time datetime="2022-02-17">MA 110</time>LA 201</li>
                    <li><time datetime="2022-02-18"></time></li>
                    <li class="today"><time datetime="2022-02-19">HASMED</time></li>
                    <li><time datetime="2022-02-20"></time></li>
                    <li><time datetime="2022-02-21"></time></li>
                    <li><time datetime="2022-02-21"></time></li>
                </ul>
                <ul style={{display:'grid', gridTemplateColumns: '1fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr '}}>
                
                    <li><time datetime="2022-02-22" style={{fontWeight: 'bold',  fontSize: '20px' }}>WEDNESDAY</time></li>
                    <li className='custom-grid' ><time datetime="2022-02-23"></time></li>
                    <li class='today custom-grid' ><time datetime="2022-02-24">HASMED</time></li>
                    <li className='custom-grid' style={{ width:'21rem'}} ><time datetime="2022-02-25">CS 101</time>LA 201</li>
                    {/* <li className='custom-grid' ><time datetime="2022-02-26">CS 101</time>LA 201</li> */}
                    <li className='custom-grid' ><time datetime="2022-02-27">MA 110</time>TUTORIAL</li>
                    <li className='today custom-grid' ><time datetime="2022-02-28">HASMED</time></li>
                    <li className='today custom-grid' ><time datetime="2022-02-28">CS 101 LAB</time>CC BUILDING</li>
                </ul>
                <ul>
                    <li><time datetime="2022-02-23" style={{fontWeight: 'bold',  fontSize: '20px' }}>THURSDAY</time></li>
                    <li className='today'><time datetime="2022-02-28">HASMED</time></li>
                    <li><time datetime="2022-02-25">ME 104</time>S1 - LC 301, S2 - LC 302</li>
                    <li><time datetime="2022-02-26">MA 110</time>LA 201</li>
                    <li><time datetime="2022-02-27"></time></li>
                    <li><time datetime="2022-02-28"></time></li>
                    <li><time datetime="2022-02-23"></time></li>
                    <li><time datetime="2022-02-23"></time></li>
                </ul>
                <ul style={{display:'grid', gridTemplateColumns: '1fr 1fr 1.5fr 1.5fr 1fr 1fr 1fr '}}>

                    <li><time datetime="2022-02-24" style={{fontWeight: 'bold',  fontSize: '20px' }}>FRIDAY</time></li>
                    <li><time datetime="2022-02-24"></time></li>
                    <li><time datetime="2022-02-24"></time></li>
                    <li style={{ width:'21rem'}}><time datetime="2022-02-24">CS 101</time>LA 201</li>
                    {/* <li><time datetime="2022-02-24">CS 101</time>LA 201</li> */}
                    <li><time datetime="2022-02-24"></time></li>
                    <li><time datetime="2022-02-24"></time></li>
                    <li><time datetime="2022-02-24"></time></li>
                </ul>

            </div>

        </div>
    )
}

export default SEM2
