import React from 'react';
import Navbar from '../../components/Navbar';
import './style.css';

const impDocs = () => {
  const sections = [
    {
      title: "Rulebooks",
      documents: [
        {
          title: "Department Constitution",
          link: "https://drive.google.com/file/d/1jNcSL1Y_q0c9gxvm7who1mNHU9d21wcW/view?usp=drive_link",
        },
        {
          title: "UG Rulebook",
          link: "https://drive.google.com/file/d/1_5xQfWwkKnz_GDfCewDOCwlx-KdD8ixN/view?usp=drive_link",
        },
        {
          title: "Masters Rulebook",
          link: "https://drive.google.com/file/d/1Ysv1q5w6SNGOHnm6z_J58zmAteAY72ca/view?usp=drive_link",
        },
        {
          title: "PhD Rulebook",
          link: "https://drive.google.com/file/d/1rvmoje3AYXyh9E2qXI2k0h20p466OVNT/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Guidelines",
      documents: [
        {
          title: "Project-based Course Guidelines",
          link: "/",
        },
        {
          title: "UGAC Booklets",
          link: "https://lnk.bio/CareerCell",
        },
        {
          title: "Univ Intern Booklet",
          link: "https://drive.google.com/file/d/1ga1ZHs3ZL6QnZiFKWMnyVjoCAXCVqFlB/view?usp=drive_link",
        },
        {
          title: "Internship Guide 101",
          link: "https://drive.google.com/file/d/1_5H-I7K1BbgDCbBxZbBe14G87rKAdN4j/view?usp=drive_link",
        },
      ],
    },
    {
      title: "Miscellaneous",
      documents: [
        {
          title: "Core Resume Repository",
          link: "https://drive.google.com/drive/folders/1CiBRl-hOzgeDuXxu0zQ27QfQkE_1FQW9Ja5hrKqh2Z19acdxrSpEI8dZHgFbQHY-VKo9NR1e?usp=sharing",
        },
        {
          title: "DCAMP Previous Year Resume Repos",
          link: "https://drive.google.com/drive/folders/1MLJgn_hjlLXco7s_ntzox9OwSZDGya1at7VmyYyUztMki-8qe9UMJo2ozpcewqExU4Kh_ol5",
        },
        {
          title: "ISCP Handbook",
          link: "https://drive.google.com/file/d/1Zx7aC9RrW5fsqRwObe40cp3YY7f-_b0b/view?usp=drive_link",
        },
        {
          title: "Student Application Form",
          link: "https://drive.google.com/file/d/13cIk0o_XCDv-mKB-9Ib1xsxTEuGlkQaV/view?usp=drive_link",
        },
        {
            title: "Retagging norms",
            link: "/",
        },
      ],
    },
  ];

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <Navbar />
      <h3 className="_h4">Important Documents</h3>
      <div className="imp-docs-container">
        {sections.map((section, index) => (
          <div key={index} className="imp-docs-section">
            <h4 className="section-title">{section.title}</h4>
            <div className="imp-docs-grid">
              {section.documents.map((doc, docIndex) => (
                <a
                  key={docIndex}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-card"
                >
                  <div className="doc-content">
                    <h4>{doc.title}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
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

export default impDocs;
