import React, { useEffect } from "react";
import Navbar from '../../components/Navbar';
import "./style.css";
import $ from "jquery";
import "datatables.net";

const LabsTable = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#myTable").DataTable();
    });
  }, []);

  const data = [
    {
      id: 1,
      LabName: "Acoustics and Hearing Laboratory",
      ProfName: "Prof Sripriya Ramamoorthy",
      Contact: "ramamoor@iitb.ac.in",
      ResearchInterests: "Multi-functional materials, noise cancellation, hearing research.",
      Location: "Near lift, Ground floor, Mechanical Engineering Department Building, IIT Bombay.",
    },
    {
      id: 2,
      LabName: "Advanced Mechanical Testing Facility",
      ProfName: "Amber Srivastava",
      Contact: "ashrivastava.me@iitb.ac.in",
      ResearchInterests: "Solid state joining, additive manufacturing, thermo-mechanical processing, microscopy.",
      Location: "Ground Floor, ME Building, IIT Bombay",
    },
    {
      id: 3,
      LabName: "Computational Fluid Dynamics Lab",
      ProfName: "Atul Sharma",
      Contact: "atulsharma@iitb.ac.in, head.me@iitb.ac.in, (+91)-22-25767505",
      ResearchInterests: "Computational fluid dynamics, multi-phase flows, fluid-structure interaction, energy harvesting.",
      Location: "First Floor Mech Department",
    },
    {
      id: 4,
      LabName: "Computational Solid Mechanics Laboratory",
      ProfName: "Parag Tandaiya",
      Contact: "parag.ut@iitb.ac.in",
      ResearchInterests: "Mechanical response of materials, finite element method, molecular dynamics, DFT.",
      Location: "Last lab in the corridor, Ground Floor, Mechanical Engineering Department Building, IIT Bombay.",
    },
    {
      id: 5,
      LabName: "Hybrid Additive Manufacturing Laboratory",
      ProfName: "Asim Tiwari",
      Contact: "asim.tewari@iitb.ac.in",
      ResearchInterests: "Smart manufacturing, additive manufacturing algorithms, 3D microscopy, image analysis.",
      Location: "Besides Rahul Bajaj, IIT Bombay",
    },
    {
      id: 6,
      LabName: "Laser Advanced Materials Laboratory",
      ProfName: "Deepak Marla",
      Contact: "dmarla@iitb.ac.in",
      ResearchInterests: "Laser materials processing, micro-manufacturing, numerical process modeling, simulation.",
      Location: "First lab in the corridor, Ground Floor, Mechanical Engineering Department Building, IIT Bombay.",
    },
    {
      id: 7,
      LabName: "Mechanics of Materials Laboratory",
      ProfName: "Krishna Jonnalagadda",
      Contact: "krishnajn@iitb.ac.in",
      ResearchInterests: "Mechanical behavior of materials, fracture mechanics, dynamic deformation, thin film mechanics.",
      Location: "Ground Floor, ME Building, IIT Bombay",
    },
    {
      id: 8,
      LabName: "Microstructural Mechanics and Micro-forming Laboratory",
      ProfName: "Asim Tewari, Sushil Mishra",
      Contact: "asim.tewari@iitb.ac.in, sushil.mishra@iitb.ac.in",
      ResearchInterests: "Metal-forming, microstructure, materials modeling, additive manufacturing, 4D X-ray microscopy.",
      Location: "3, YP Road, Besides Rahul Bajaj Technology Innovation Centre",
    },
    {
      id: 9,
      LabName: "Machine Tools Laboratory",
      ProfName: "RK Singh",
      Contact: "rsingh@iitb.ac.in",
      ResearchInterests: "Micromachining, CNC machining, laser micromachining, sustainable microscale manufacturing.",
      Location: "4WM9+C3R, Infinite Corridor",
    },
    {
      id: 10,
      LabName: "National Centre For Aerospace Innovation and Research",
      ProfName: "Asim Tewari",
      Contact: "asim.tewari@iitb.ac.in",
      ResearchInterests: "Smart manufacturing, additive manufacturing, image analysis, AI in manufacturing.",
      Location: "2nd floor, Transit Building",
    },
    {
      id: 11,
      LabName: "Refrigenation, air conditioning and cryogenics lab",
      ProfName: "Milind Atrey",
      Contact: "matrey@iitb.ac.in, +91-22-2576-7522, +91-22-2572-6875",
      ResearchInterests: "Cryocoolers, vapor compression, absorption systems, cooling towers, heat transfer.",
      Location: "N4 Bay Mech Department",
    },
    {
      id: 12,
      LabName: "RAPID MANUFACTURING LABORATORY",
      ProfName: "K P Karunakaran",
      Contact: "karuna@iitb.ac.in",
      ResearchInterests: "Rapid manufacturing, CNC automation, 3D printing, hybrid layered manufacturing.",
      Location: "F3 shed, YP road, Besides Rahul Bajaj Technology Innovation Centre",
    },
    {
      id: 13,
      LabName: "Robotics Laboratory",
      ProfName: "Anirban Guha, Abhishek G, V. Kartik",
      Contact: "anirbanguha1@gmail.com, abhi.gupta@iitb.ac.in, vkartik@iitb.ac.in",
      ResearchInterests: "Robotics, human-robot interaction, assistive devices, machine learning in robotics.",
      Location: "Ground Floor, ME Building, IIT Bombay",
    },
    {
      id: 14,
      LabName: "Scalable Algorithms and Numerical Methods in Computing Laboratory",
      ProfName: "Shivasubramanian Gopalakrishnan",
      Contact: "sgopalak@iitb.ac.in, +91-22-2576-7524",
      ResearchInterests: "Computational fluid dynamics, multiphase flows, numerical methods, geophysical fluid dynamics.",
      Location: "Opposite N3 Bay",
    },
    {
      id: 15,
      LabName: "Solid Mechanics Laboratory",
      ProfName: "Nitesh Yelve",
      Contact: "nitesh.yelve@iitb.ac.in",
      ResearchInterests: "Vibration analysis, machinery diagnostics, structural health monitoring, composites.",
      Location: "Ground Floor, ME Building, IIT Bombay",
    },
    {
      id: 16,
      LabName: "Thermal hydraulics Test facility",
      ProfName: "Janani Sree Murallidharan",
      Contact: "js.murallidharan@iitb.ac.in",
      ResearchInterests: "Multiphase heat transfer, computational fluid dynamics, interface tracking, rod bundle heat transfer.",
      Location: "Just besides the Transit building, Librabry Road, IIT Bombay.",
    },
    {
      id: 17,
      LabName: "Thermal Science Lab",
      ProfName: "Sandip Kumar Saha",
      Contact: "",
      ResearchInterests: "SS-PCM for electronics, thermochemical energy storage, Leidenfrost phenomenon simulation.",
      Location: "Steam Power Lab, Near Transit Building, IIT Bombay, 400076",
    },
    {
      id: 18,
      LabName: "Vibrational Spectroscopy Lab",
      ProfName: "Dipanshu Bansal",
      Contact: "",
      ResearchInterests: "Ultrafast vibrational spectroscopy, DSC/TGA, spectrometer, monochromator.",
      Location: "Mech Department 1st Floor",
    },
      {
      id: 19,
      LabName: "Wave and Vibration Engineering (WaVE) Lab",
      ProfName: "Prof. Nitesh Prakash Yelve",
      Contact: "nitesh.yelve@iitb.ac.in",
      ResearchInterests: "Vibration analysis, machinery fault diagnosis, product design, vibration reduction.",
      Location: "Transit building",
    }
    // ... more labs will be added as you provide them
  ];

  return (

    <div className="table-container" style={{marginBottom:"100px",marginTop:"80px"}}>
      <Navbar/>
      <h4 className="_h4" style={{textAlign:"center"}}>Labs</h4>
      {/* <h2  style={{textAlign:"center"}}>Headinggggggg</h2> */}
      <div className="table-responsive">

      <table className="table table-striped table-hover" id="myTable">
        <thead>
          <tr>
            <th>S. No.</th>
            <th>Name of Lab</th>
            
            <th>Name of Instructor</th>
            
            <th>Contact</th>
           
            <th>Research Interests</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.LabName}</td>
                <td>{item.ProfName}</td>
                <td>{item.Contact}</td>
                <td>{item.ResearchInterests}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      <div id="footer">

<div className="footer-top">
  <div className="container">
    <div className="row">

    <div className="col-lg-3 col-md-6 footer-contact">
          <h3 style={{color:"#DAC0A3"}}>MEA IIT Bombay<span>.</span></h3>
          <p>
          IIT Bombay<br />
          Maharashtra 400076<br /><br />
            <strong>Phone:</strong> +91  63800 85819<br />
            <strong>Email:</strong> gsec@me.iitb.ac.in<br />
          </p>
        </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
            <li><i className="bx bx-chevron-right"></i> <a href="https://moodle.iitb.ac.in/login/index.php">Moodle</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://www.cdeep.iitb.ac.in/">CDEEP</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://webmail.iitb.ac.in/?_task=mail&_mbox=INBOX">Webmail</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://portal.iitb.ac.in/asc/Login">External ASC</a></li>
            <li><i className="bx bx-chevron-right"></i> <a href="https://asc.iitb.ac.in/acadmenu/index.jsp">Internal ASC</a></li>
          </ul>
      </div>
    </div>
  </div>
</div>


  <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-start">
      <div className="copyright">
             &copy; created by--Subram & Sridhar | managed by-Lakshaditya <strong><span>MEA IIT Bombay</span></strong>
            </div>

      </div>
     
  </div>
</div>
    </div>
  );
};

export default LabsTable;
