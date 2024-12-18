import React from 'react'
import "./style.css"
import { useEffect,useState } from 'react';
import AOS from 'aos';
import Navbar from '../../components/Navbar'

import Adrika from "../../img/images/adrika.jpeg"
import Kaavya from "../../img/images/kaavya.jpg"
import Vaibhav from "../../img/images/vaibhav.jpg"
import Dhriti from "../../img/images/dhriti.jpg"
import Khushi from "../../img/images/khushi.jpg"
import Aditya from "../../img/images/aditya.jpg"
import Lakshaditya from "../../img/images/lakshaditya.jpg"
import Kunsh from "../../img/images/kunsh.jpg"
import Kriti from "../../img/images/kriti.jpg"
import Devasish from "../../img/images/devasish.jpeg"
import Sumit from "../../img/images/sumit.jpg"
import Harish from "../../img/images/harish.png"
import Lovepreet from "../../img/images/lovepreet.jpeg"
import Suryansh from "../../img/images/suryansh.jpg"
import Bhushan from "../../img/images/bhushan.JPG"
import Tanmay from "../../img/images/tanmay1.jpg"
import Meghraj from "../../img/images/meghraj.jpg"
import Vinay from "../../img/images/vinay.jpeg"
import Videh from "../../img/images/videh.jpg"
import Rishik from "../../img/images/rishik.png"
import Keshav from "../../img/images/keshav.png"
import Manish from "../../img/images/manish.jpg"
import Pratham from "../../img/images/pratham.jpg"
import Himanshu from "../../img/images/himanshu.jpg"
import Harshita from "../../img/images/harshita.jpg"
import Pranjal from "../../img/images/pranjal.jpg"
import Purvi from "../../img/images/purvi.jpg"
import Jennifer from "../../img/images/jennifer.jpg"
import Madhur from "../../img/images/madhur.jpg"
import Sinchana from "../../img/images/sinchana.jpg"
import Siddhant from "../../img/images/siddhant.jpg"
import Angel from "../../img/images/angel.jpg"
import Prakhar from "../../img/images/prakhar.jpg"
import Srikrishna from "../../img/images/srikrishna.jpg"

const Team = () => {
	useEffect(() => {
        AOS.init({
			duration: 1200,
		  });
		
      }, []);
  return (
    <div style={{marginTop:"100px",textAlign:"center"}}>
        <Navbar/>
		<h4 className="_h4" >Our Team:</h4>		<div className='team_head'>
		<div className='team_container'>
    	<div className='thecard'>
        <div className='team_ frontpage'>
            <img src={Kriti} alt="Kriti" />
            <h2>Kriti Talreja</h2>
            <p>Dept General Secretary</p>
        </div>
        <div className='team_ backpage'>
            <h2>Kriti Talreja</h2>
            <div className="scrollable-content">
                <p>The heart of the council, she’s the one you can count on to pick up your call—whether it’s for a rant, a chat, or gossip.</p>
                <p>You’d never guess when she actually sleeps—she’s always quick to respond, effortlessly keeping everything on track, as if she never needs a break.</p>
                <p>Her cute, short haircut matches her warm and caring nature. </p>
                <p>She’ll make sure you’re well-fed and listen to your stories as if they’re the most important thing in the world, because to her, they are.</p>
            </div>
            <div className='social-icons'>
            {/* <a href="https://linkedin.com/in/preetlovi" className="linkedin" style={{color:"#0A66C2"}}>
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/_preet_lovi?igsh=MTh0cmtkMnZoODJkcA%3D%3D&utm_source=qr" className="instagram" style={{color:"#c13584"}}>
                <i class="bi bi-instagram"></i>
            </a> */}
            <a href="mailto:210100083@iitb.ac.in" className="email" style={{color:"#0A66C2"}}>
                <i class="bi bi-envelope"></i>
            </a></div>
        </div>
    </div>
</div>

</div>
<div className='team_head'>
    <div className='team_container '>
		<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Lovepreet} alt="Lovepreet Singh" />
        <h2>Lovepreet Singh</h2>
        <p>PG Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Lovepreet Singh</h2>
        <div className="scrollable-content">
            <p>With an old-school soul and a modern flair, he effortlessly combines authenticity with ambition, bringing a unique charm to everything he does.</p>
            <p>Finding joy in life’s simple pleasures, he thrives on a good playlist or an enriching conversation that leaves an impact.</p>
            <p>Driven by a desire for beauty and growth, he seeks to make each step meaningful, embracing life’s journey with open eyes and an open heart.</p>
        </div>
        <div className='social-icons'>
            <a href="https://linkedin.com/in/preetlovi" className="linkedin" style={{color:"#0A66C2"}}>
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/_preet_lovi?igsh=MTh0cmtkMnZoODJkcA%3D%3D&utm_source=qr" className="instagram" style={{color:"#c13584"}}>
                <i class="bi bi-instagram"></i>
            </a>
            <a href="mailto:23m1686@iitb.ac.in" className="email" style={{color:"#0A66C2"}}>
                <i class="bi bi-envelope"></i>
            </a>
        </div>
    </div>
</div>

	</div>
</div>
<div className='team_head'>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage CS' data-aos="zoom-in">
        <img src={Bhushan} alt="Bhushan Khandare" />
        <h2>Bhushan Khandare</h2>
        <p>Chief Secretary Events and Execution</p>
    </div>
    <div className='team_ backpage'>
        <h2>Bhushan Khandare</h2>
        <div className="scrollable-content">
            <p>The perfect example of work-life balance—strict and focused till the work is done, but once it's over he’s the most relaxed, fun-loving guy in the room.</p>
            <p>He tackles any project with bullet points and flow charts, making tough jobs look easy.</p>
            <p>A history and politics enthusiast, his conversations are insightful, and he’s got a knack for decision-making and team motivation.</p>
            <p>His feed? Full of scary reels he’s bound to share, yet he’s always there with support and solutions when you need them.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/bhushan-khandare-518078250/" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/bhushankhandare_/" className="instagram" style={{color:"#c13584"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:22b2138@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage CS' data-aos="zoom-in">
        <img src={Tanmay} alt="Tanmay Kulkarni" />
        <h2>Tanmay Kulkarni</h2>
        <p>Chief Secretary Academic Affairs</p>
    </div>
    <div className='team_ backpage'>
        <h2>Tanmay Kulkarni</h2>
        <div className="scrollable-content">
            <p>The “hamesha mast rehne ka” guy, always spreading good vibes.</p>
            <p>A proud Marathi and former cadet, he’s smart, philosophical, and the go-to for intellectual debates.</p>
            <p>A true patriot with a hidden talent for writing, he may seem “sakal se bhola,” but there’s much more to him than meets the eye.</p>
            <p>Even though he does RR, he’s still great at everything he touches.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/tanmaykulkarni3/" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/tanmay_kulkarni__/" className="instagram" style={{color:"#c13584"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:22b2188@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Himanshu} alt="Himanshu Sharma" />
        <h2>Himanshu Sharma</h2>
        <p>Department Coordinator</p>
    </div>
    <div className='team_ backpage'>
        <h2>Himanshu Sharma</h2>
        <div className="scrollable-content">
            <p>Balancing serious work with a spark of spontaneity.</p>
            <p>He’s the kind of person who might suggest a cup of tea at 2 a.m. or a thrilling pool game at 4 a.m.!</p>
            <p>His weekends are filled with DIY projects, squash matches, and exciting trekking adventures that keep his spirit alive and his friends guessing what he’ll come up with next!</p>
        </div>
        <div className='social-icons'>
            <a href="https://in.linkedin.com/in/himanshu-1998" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/himanshu_1998_/" className="instagram" style={{color:"#c13584"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23m1693@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Harish} alt="Harishkumar Gajakosh" />
        <h2>Harishkumar</h2>
        <p>PG Cultural Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Harishkumar </h2>
        <div className="scrollable-content">
            <p>He is a photography enthusiast with a love for capturing moments.</p>
            <p>When not behind the camera, you’ll likely find him battling it out in Clash Royale.</p>
			<p>Binge-watching anime is one of his other favourite pastimes </p>
            <p>But that’s not all—being drawn to co-curriculars with a cultural twist keeps life full of exciting events and fresh perspectives.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/hklg/" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/lets.chillax/" className="instagram" style={{color:"#c13584"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23m1681@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Sumit} alt="Sumit Anand" />
        <h2>Sumit Anand</h2>
        <p>PG Sports Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Sumit Anand</h2>
        <div className="scrollable-content">
            <p>He has spent unforgettable years in the picturesque landscapes of Uttarakhand, where he discovered his passion for hilly escapades.</p>
            <p>His secret weapon? A fit physique that fuels his athletic pursuits and keeps him ready for any challenge.</p>
            <p>Juggling academics, sports, and a dash of playful flirting, he knows how to keep campus life exciting.</p>
            <p>A history buff with a fascination for World War tales, he is always ready to share a laugh or an engaging story, ensuring that every gathering is lively and memorable.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/sumit-anand-49190a171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/_s.aanand_44/" className="instagram" style={{color:"#c13584"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23m1634@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
	<div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Vinay} alt="Vinay Kumar Tiwari" />
        <h2>Vinay Kumar Tiwari</h2>
        <p>Department Coordinator</p>
    </div>
    <div className='team_ backpage'>
        <h2>Vinay Kumar Tiwari</h2>
        <div className="scrollable-content">
            <p>Believes in balancing life with purpose and knows that hard work is the foundation for achieving anything truly meaningful.</p>
            <p>Drawn to tackling technical challenges, he’s passionate about finding solutions that combine elegance with precision to push the boundaries of innovation.</p>
            <p>Focused on making a positive impact, he brings a fresh perspective to every project, always striving to make a difference in society.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/vinay-kumar-tiwari-163847263/?originalSubdomain=in" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/vinaytiwari5789/" className="instagram" style={{color:"#c13584"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23m1644@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
    </div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Meghraj} alt="Meghraj Prajapat" />
        <h2>Meghraj Prajapat</h2>
        <p>AURAA(PGAC)</p>
    </div>
    <div className='team_ backpage'>
        <h2>Meghraj Prajapat</h2>
        <div className="scrollable-content">
            <p>He champions a balanced lifestyle, firmly believing that a happy mind and a fit body are essential ingredients for boosting productivity and successfully achieving his goals.</p>
            <p>With a passion for tackling complex technical challenges, he thrives on the excitement of discovering innovative solutions, particularly in research that requires a high level of precision and detail.</p>
            <p>Driven by an insatiable curiosity and a strong desire to push the boundaries of engineering, he is on a mission to integrate AI into his work, aiming for groundbreaking advancements that make a real difference.</p>
        </div>
        <div className='social-icons'>
            <a href="mailto:23m1583@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Manish} alt="Manish Kumar" />
        <h2>Manish Kumar</h2>
        <p>PhD Representative</p>
    </div>
    <div className='team_ backpage'>
        <h2>Manish Kumar</h2>
        <div className="scrollable-content">
            <p>Grounded and straightforward, he values simplicity in life and believes in staying true to his roots, balancing ambition with a practical outlook.</p>
            <p>Immersed in his academic journey, he’s recognized not only for his dedication to learning but also for his easygoing nature and commitment to honoring his promises.</p>
            <p>When it comes to tough decisions, he’s one to follow his heart over his mind, letting his instincts and emotions guide him toward what feels genuinely right.</p>
        </div>
        <div className='social-icons'>
            <a href="mailto:manish94@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
</div>
<div className='team_head'>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Aditya} alt="Aditya Udeniya" />
        <h2>Aditya Udeniya</h2>
        <p>UG Sports Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Aditya Udeniya</h2>
        <div className="scrollable-content">
            <p>Popularly referred to by his last name, he’s the council’s resident comedian, always ready to turn any situation into a laugh.</p>
            <p>Officially the sports secy, but he’s involved in everything—from getting work done to snapping photos at every event and making sure there’s food at every meet.</p>
            <p>Behind all the jokes (and bakchodi), he’s incredibly dependable, taking on any task with enthusiasm.</p>
            <p>With his signature “sahi baat hai,” he’s always fun to be around and someone you can count on.</p>
        </div>
        <div className='social-icons'>
            <a href="mailto:23b2109@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Adrika} alt="Adrika Das" />
        <h2>Adrika Das</h2>
        <p>Design Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Adrika Das</h2>
        <div className="scrollable-content">
            <p>A creative powerhouse, Adrika can bring any idea to life in minutes, Photoshopping anything into existence with ease.</p>
            <p>Known as the council’s “sushi girl,” she’s always fueled by good food and her passion for design.</p>
            <p>Her high-pitched voice and love for drama add to her charm, and she’s a pro at getting everyone’s secrets.</p>
            <p>Hardworking, yet always full of fun, she’s the one who breaks the silence with jokes and turns serious moments into laughter.</p>
        </div>
        <div className='social-icons'>
            <a href="mailto:23b2171@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Devasish} alt="Devasish Behera" />
        <h2>Devasish Behera</h2>
        <p>Media Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Devasish Behera</h2>
        <div className="scrollable-content">
            <p>Meet the quiet genius of our council – the guy who rocks loose-fit clothes, always behind the lens capturing those stunning, candid shots that give us our best moments.</p>
            <p>Usually tucked away in his own world with headphones on, but when he does speak, it’s always worth listening to.</p>
            <p>His editing skills? Absolutely top-notch. He’s got the flair of a future vlogging star.</p>
            <p>You might find him lost in the brainrot side of Instagram, but he's always cooking up something that'll keep you glued to your screens.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/devasish-behera-474409278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://instagram.com/devasssish" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E1306C"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23b2291@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Dhriti} alt="Dhriti Singh" />
        <h2>Dhriti Singh</h2>
        <p>Senior Editor</p>
    </div>
    <div className='team_ backpage'>
        <h2>Dhriti Singh</h2>
        <div className="scrollable-content">
            <p>No one can beat her at having multiple tabs and apps open, much like her mind, which has evolved just right for yapping 24/7.</p>
            <p>Swears by Taylor Swift and is always up to date with the celebrity gossip. When she’s not being a full-on Swiftie (never), she is either speaking in AI or cooking on Google Docs.</p>
            <p>She has labelled herself as an “introvert,” so if you find her showing golden retriever energy around you, then Congratulations! You’ve crossed the “I Don't Know You Yet” stage.</p>
            <p>Always ready with the best puppy face—especially when food is involved. But charms aside, when she’s at work, she’s in the zone and makes sure everyone else is too.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/dhriti-singh-194aa92a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="mailto:23b2108@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Kaavya} alt="Kaavya Vasu" />
        <h2>Kaavya Vasu</h2>
        <p>2nd Year CR</p>
    </div>
    <div className='team_ backpage'>
        <h2>Kaavya Vasu</h2>
        <div className="scrollable-content">
            <p>Wannabe superstar with rizz levels off the charts and a blowout that's got all the ladies jealous.</p>
            <p>From racing team to StyleUp to MEA to gym, he's basically got a PhD in "being everywhere."</p>
            <p>With a humor that could lead to a live-action adaptation of Flynn Rider surrounded with swords, he’ll throw his most creative, colorful gaali your way—which, from him, is practically a badge of honor.</p>
            <p>Beneath all that swagger, he’s one of the few who’ll genuinely hear you out—even if he’s judging your music taste the whole time.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/kaavya-vasu-5aa278290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/kaavya_vasu17?igsh=amlpcjQ5b25pYXI=" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23b2194@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Keshav} alt="Keshav Goyal" />
        <h2>Keshav Goyal</h2>
        <p>Associate Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Keshav Goyal</h2>
        <div className="scrollable-content">
            <p>The guy who somehow nails both street smartness and top grades—all while staying calm like it’s no big deal.</p>
            <p>He’s got that “consultant” vibe, always talking in this smooth, diplomatic tone that makes even chaos sound manageable.</p>
            <p>Though he's a Delhi boy, he doesn’t bring the usual Delhi spice; he's more like the council’s peace negotiator.</p>
            <p>Reliable, chill, and always on top of things—he’s the guy who can charm his way through any task.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/keshav-goyal-9b2504299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/keshavgoyal6335/" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23B2121@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Khushi} alt="Khushi Sharma" />
        <h2>Khushi Sharma</h2>
        <p>2nd Year CR</p>
    </div>
    <div className='team_ backpage'>
        <h2>Khushi Sharma</h2>
        <div className="scrollable-content">
            <p>Juggling over a zillion tasks, each requiring umpteen hours, she still finishes everything on time!</p>
            <p>She’s a multi-talented powerhouse: dancer, singer, speaker, poet...you name it, she’s already good at it.</p>
            <p>Constantly on the move but somehow always free for a chat, she’s the friend who can handle your problems while finishing her to-do list.</p>
            <p>Despite all her impressive achievements, she’s still one of the kindest people in insti—basically a superhuman with a heart of gold.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/khushi-sharma-10b93b286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/khushi_knrs/profilecard/?igsh=eXJ6eXFqa2VmeTRs" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23b2182@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Kunsh} alt="Kunsh Nyati" />
        <h2>Kunsh Nyati</h2>
        <p>2nd Year CR</p>
    </div>
    <div className='team_ backpage'>
        <h2>Kunsh Nyati</h2>
        <div className="scrollable-content">
            <p>This guy lives for Formula1, but expect a car crash the moment he turns the keys.</p>
            <p>He somehow went from “Wait, who?” to the official spokesperson for backbenchers of his batch (as he's also one of them).</p>
            <p>Known to show up with that “just woke up” look, he brings a laid-back vibe wherever he goes, keeping it light even when the professor throws a surprise deadline our way!</p>
            <p>Friendly, easygoing, and surprisingly reliable, he’s the classmate we’re all glad to count on.</p>
        </div>
        <div className='social-icons'>
            <a href="mailto:23b2295@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Lakshaditya} alt="Lakshaditya Singh" />
        <h2>Lakshaditya Singh</h2>
        <p>Web Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Lakshaditya Singh</h2>
        <div className="scrollable-content">
            <p>Tech Gawd- he's quiet at first, but get to know him, and he’s full of surprises.</p>
            <p>He’s that guy who shows up to every meet on the dot, with every task done perfectly like he’s training for IAS already (and he even looks the part).</p>
            <p>Need help? Just ask, and he’ll handle it like it’s an error code he can’t move past until it’s fixed. He’s like the sweetest, most down-to-earth person in the council—a literal bug whisperer.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/lakshaditya-singh-25860028a/" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/singh_lakshaditya/" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23b2230@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
    </div>
    


	</div>
    <div className='team_container'>
	<div className='thecard'>
        <div className='team_ frontpage' data-aos="zoom-in">
            <img src={Purvi} alt="Purvi Rathore" />
            <h2>Purvi Rathore</h2>
            <p>2nd Year CR</p>
        </div>
        <div className='team_ backpage'>
            <h2>Purvi Rathore</h2>
            <div className="scrollable-content">
                <p>The early bird who wakes up at 5 AM while the rest of us are still waiting for our alarms to go off.</p>
                <p>This disciplined NCC cadet not only dominates her studies but does it all while looking like she just stepped off a fashion runway.</p>
                <p>Trustworthy and a joy to chat with, she’s the kind of friend who’ll inspire you to chase your goals.</p>
                <p>Her knack for color theory can help you pair outfits you never thought would work together.</p>
            </div>
            <div className='social-icons'>
                
                <a href="https://www.linkedin.com/in/purvi-rathore-bb989a284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
                
                <a href="https://www.instagram.com/ivrup__/" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
                <a href="mailto:23b2163@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
            </div>
        </div>
    </div>
    


	</div>
    <div className='team_container'>
    <div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Rishik} alt="Rishik Yadav" />
        <h2>Rishik Yadav</h2>
        <p>Alumni Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Rishik Yadav</h2>
        <div className="scrollable-content">
            <p>His contact list is so extensive that you might find yourself stumbling upon your grandparents’ best friends in it—he truly has a knack for connecting with people from all walks of life!</p>
            <p>A patient listener and highly cooperative, his mere presence exudes a sense of assurance that instantly puts others at ease, making him a go-to confidant in times of need.</p>
            <p>Beneath his soft-spoken exterior lies a theatrical charm that comes alive on stage, revealing a glorious and vibrant side of his personality that captivates audiences and contrasts beautifully with his everyday demeanor.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/rishik-yadav-3952212a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/_rishikyadav_?igsh=NnN1dmVjNnZ3Zmh5" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:23b2103@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
    <div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Vaibhav} alt="Vaibhav Patil" />
        <h2>Vaibhav Patil</h2>
        <p>Associate Secretary</p>
    </div>
    <div className='team_ backpage'>
        <h2>Vaibhav Patil</h2>
        <div className="scrollable-content">
            <p>Our council's ultimate dada —always ahead of the game!</p>
            <p>This gym freak has enough connections to throw a party for the whole campus.</p>
            <p>He’s known for his quick comebacks and personalizing nicknames, so now you know who to contact for a new Instagram username.</p>
            <p>With a genuine personality and a talent for sweet-talking his way through any logistical challenge in fluent Marathi, he’s the guy you want around when you need a laugh or something sorted out!</p>

        </div>
        <div className='social-icons'>
            <a href="mailto:23b2274@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
</div>
<div className='team_head'>
   
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Jennifer} alt="Jennifer Esbel Mary" />
        <h2>Jennifer Esbel Mary</h2>
        <p>Junior Editor</p>
    </div>
    <div className='team_ backpage'>
        <h2>Jennifer Esbel Mary</h2>
        <div className="scrollable-content">
            <p>The loudest person in the room, always ready to chat about the most random things with an unhealthy amount of enthusiasm.</p>
            <p>Her way of naming contacts is an art of its own - she comes up with the most random titles you never knew you needed.</p>
            <p>She might be struggling with her “ka’s and ki’s,” but ask her about the latest Bollywood hooksteps, and she’ll show you just how much of a pro she really is.</p>
            <p>You’ll probably find her dozing off when you call to remind her about a deadline, but she always wakes up just in time to sprinkle her magic and get it done.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/jennifer-esbel-mary-6a9a1b316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/almost_para_dise/profilecard/?igsh=MWxrMXdrMW9ycHhjbg==" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:24b2176@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>


	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Madhur} alt="Madhur Likhmani" />
        <h2>Madhur Likhmani</h2>
        <p>Junior Editor</p>
    </div>
    <div className='team_ backpage'>
       
        <h2>Madhur Likhmani</h2>
        
        <div className="scrollable-content">
            <p>Never starts his conversations without saying “Let Me Tell You Something.”</p>
            <p>Need a guy who can prep the quiz answers before the key’s even out? He’s got you covered. His love for Spotify and guitars doesn’t stop him from acing his acads.</p>
            <p>Roasting his colleagues is his full-time job for which he is not paid enough, but when it comes to work, he takes on a caring and purpose-driven personality.</p>
            <p>Creative perspectives paired with a unique comprehension, his skill-set is as magnificent as a lion... though he acts as if his spirit feline is a cat.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/madhur-likhamani-44620b337" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}>
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/madhurlikhmani/profilecard/?igsh=MTNxM3hpamtpcnZ5Zw==" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}>
                <i class="bi bi-instagram"></i>
            </a>
            <a href="mailto:24B2170@iitb.ac.in" className="email" style={{color:"#0A66C2"}}>
                <i class="bi bi-envelope"></i>
            </a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
	<div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Sinchana} alt="Sinchana Patil" />
        <h2>Sinchana Patil</h2>
        <p>Junior Designer</p>
    </div>
    <div className='team_ backpage'>
        <h2>Sinchana Patil</h2>
        <div className="scrollable-content">
            <p>Most commonly known as Shinchan. Vegetarian but has no love for vegetables, so everyone is sure to sympathize with her when it comes to the mess food.</p>
            <p><strong>#FriesAllDayEveryDay</strong></p>
            <p>Human alarm clock on weekdays. Religiously sleeps for almost half a day on weekends, making it loud and clear that she’s got her priorities right.</p>
            <p>Most practical person amongst the freshers, she definitely knows what she is talking about, making her opinions always worthy of regard.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/sinchana-patil-705280321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/sinchana.patil21?igsh=bWk4Y3B2YmM1eDR3" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:24b2257@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
    <div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Siddhant} alt="Siddhant Patil" />
        <h2>Siddhant Patil</h2>
        <p>Junior Designer</p>
    </div>
    <div className='team_ backpage'>
        <h2>Siddhant Patil</h2>
        <div className="scrollable-content">
            <p>Has the most enthusiastic response when he hears the words “One Piece” and “Naruto,” while the rest of the time, he is loyal to his deadlines.</p>
            <p>He doesn’t yap around and bore you, but his one-liners are sure to send a wave of laughter about the room.</p>
            <p>Maintains clarity of sense somehow. He is the anchor of the freshie creative council.</p>
            <p>Makes impeccable observations and equally powerful interpretations. This Sherlock doesn’t need a Watson.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/siddhant-c-patil-613709314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/scp15156402/profilecard/?igsh=OGZ5dnlpamh3OG5y" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:24b2121@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
    <div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Angel} alt="Angel Singhvi" />
        <h2>Angel Singhvi</h2>
        <p>1st Year CR</p>
    </div>
    <div className='team_ backpage'>
        <h2>Angel Singhvi</h2>
        <div className="scrollable-content">
            <p><strong>“LIVED IN 5 COUNTRIES, AND BEEN TO MORE”.</strong></p>
            <p>One moment she’s giving her all at the pre-camp for Athletics, the next you’ll find her studying sincerely in the library, and the rest of the time she’s either vibing hard, or sleeping. She starts glitching without her 7 hours of sleep.</p>
            <p>HUGE Barca fan, and a footballer herself, she is up for debating matches anytime.</p>
            <p>On the surface, she's a ball of sunshine. But deep inside… she's still a ball of sunshine.</p>
        </div>
        <div className='social-icons'>
            <a href="https://in.linkedin.com/in/angel-singhvi-a87499337" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/angel.16_s/profilecard/?igsh=MXJheWVkNnNtMnEzNw==" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:24b2134@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>


	</div>
    <div className='team_container'>
    <div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Prakhar} alt="Prakhar Gupta" />
        <h2>Prakhar Gupta</h2>
        <p>1st Year CR</p>
    </div>
    <div className='team_ backpage'>
        <h2>Prakhar Gupta</h2>
        <div className="scrollable-content">
            <p>Treats everyone like royalty, being the true gentleman he is, and is prompt in replying to queries—he’s perpetually online.</p>
            <p>He claims that he can play basketball. Feel free to test his skills in a not-so-friendly match. He also has his own style of striking in hockey (aura +1000).</p>
            <p>He plays the guitar, guys. (He wants it to be publicised. Symphony Recruiters, where you at?)</p>
            <p>He sleeps with eyes and mouth open, so it’s Halloween for his homies all year-round.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/prakhar-gupta-680512337/" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/prakhargupta901/profilecard/?igsh=MXhvODVocnN4bTJjbg==" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:24b2173@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
    <div className='team_container'>
    <div className='thecard'>
    <div className='team_ frontpage' data-aos="zoom-in">
        <img src={Srikrishna} alt="Srikrishna Mourya" />
        <h2>Srikrishna Mourya</h2>
        <p>1st Year CR</p>
    </div>
    <div className='team_ backpage'>
        <h2>Srikrishna Mourya</h2>
        <div className="scrollable-content">
            <p>Seamlessly transitions between Hindi, English, Telugu, and Marathi, but he is loudest in the language of music and shayari.</p>
            <p>Treats every concern as if it were his very own and proposes creative solutions, so you can be sure he won’t let you down.</p>
            <p>Despite being traumatized by the unserious translation requests of Telugu music and dialogues, he would be up to discuss Tollywood titles anytime.</p>
            <p>You know that he is a perfect fit, for he took “break a leg” too seriously on the night of MECHANZA (iykyk).</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/srikrishna-mourya-karunakaram-67a432217/" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="mailto:24b2198@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>

	</div>
</div>
<div className='team_head'>
    <div className='team_container'>
    <div className='thecard'>
        <div className='team_ frontpage' data-aos="zoom-in">
            <img src={Pranjal} alt="Pranjal Girhepunje" />
            <h2>Pranjal Girhepunje</h2>
            <p>3rd Year CR</p>
        </div>
        <div className='team_ backpage'>
            <h2>Pranjal Girhepunje</h2>
            <div className="scrollable-content">
                <p>A natural at connecting with people, always ready to lend an ear, discuss Mech topics, or hear out your latest idea—she’s all in for great conversations.</p>
                <p>Loud music is her peace, and she can vibe with any track—if there’s a beat, she’s already feeling it.</p>
                <p>Whether you need advice, RR tips, or just a friendly chat, she’s only a ping away and always happy to help out.</p>

            </div>
            <div className='social-icons'>
                <a href="https://www.linkedin.com/in/pranjal-girhepunje" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
                <a href="mailto:22b2160@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
            </div>
        </div>
    </div>

	</div>
    <div className='team_container'>
    <div className='thecard'>
    <div className='team_ frontpage CS' data-aos="zoom-in">
        <img src={Tanmay} alt="Tanmay Kulkarni" />
        <h2>Tanmay Kulkarni</h2>
        <p>3rd Year CR</p>
    </div>
    <div className='team_ backpage'>
        <h2>Tanmay Kulkarni</h2>
        <div className="scrollable-content">
            <p>The “hamesha mast rehne ka” guy, always spreading good vibes.</p>
            <p>A proud Marathi and former cadet, he’s smart, philosophical, and the go-to for intellectual debates.</p>
            <p>A true patriot with a hidden talent for writing, he may seem “sakal se bhola,” but there’s much more to him than meets the eye.</p>
            <p>Even though he does RR, he’s still great at everything he touches.</p>
        </div>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/tanmaykulkarni3/" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/tanmay_kulkarni__/" className="instagram" style={{color:"#c13584"}}><i class="bi bi-instagram"></i></a>
            <a href="mailto:22b2188@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
        </div>
    </div>
</div>
	</div>
    <div className='team_container'>
    <div className='thecard'>
        <div className='team_ frontpage' data-aos="zoom-in">
            <img src={Videh} alt="Videh Jain" />
            <h2>Videh Jain</h2>
            <p>3rd Year CR</p>
        </div>
        <div className='team_ backpage'>
            <h2>Videh Jain</h2>
            <div className="scrollable-content">
                <p>His earbuds are his ultimate support system, filling his headspace with motivating music that inspires others, even for tasks he might not be up for — spreading good vibes is his game!</p>
                <p>He jokingly claims to be the laziest person on campus, waiting for the day he earns a spot in the Guinness Book of World Records for his unique talent.</p>
                <p>With big aspirations in mind, he admits he’s still in the planning stage, leaving plenty of room to grow and time to turn those dreams into reality!</p>
            </div>
            <div className='social-icons'>
                <a href="https://www.linkedin.com/in/videh-jain-966825258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="linkedin" style={{color:"#0A66C2"}}><i class="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/videh886?igsh=ZWk3d2Z4NGhqNjZh" target="_blank" rel="noreferrer" className="instagram" style={{color:"#E4405F"}}><i class="bi bi-instagram"></i></a>
                <a href="mailto:22b2229@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
            </div>
        </div>
    </div>
</div>

	
</div>
<div className='team_head'>
   
    <div className='team_container'>
    <div className='thecard'>
        <div className='team_ frontpage' data-aos="zoom-in">
            <img src={Pratham} alt="Pratham Srivastava" />
            <h2>Pratham Srivastava</h2>
            <p>4th Year CR</p>
        </div>
        <div className='team_ backpage'>
            <h2>Pratham Srivastava</h2>
            <div className="scrollable-content">
                <p>He loves movies that send chills down one’s spine.</p>
                <p>When he is not catching up on films, you might find him painting, or scribbling some poetry.</p>
                <p>He might follow tennis now and then, but his heart truly beats for physics.</p>
                <p>And when it comes to great conversations, he is always ready to chat over a steaming cup of coffee!</p>
            </div>
            <div className='social-icons'>
                <a href="mailto:210100121@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
            </div>
        </div>
</div>

	</div>
   
    <div className='team_container'>
    <div className='thecard'>
        <div className='team_ frontpage' data-aos="zoom-in">
            <img src={Suryansh} alt="Suryansh Lunkar" />
            <h2>Suryansh Lunkar</h2>
            <p>4th Year CR</p>
        </div>
        <div className='team_ backpage'>
            <h2>Suryansh Lunkar</h2>
            <div className="scrollable-content">
                <p>He has a passion for playing the guitar, but doesn't post his jamming sessions online for the sake of everyone’s mental health.</p>
                <p>When he’s not strumming away, you can find him lost in the pages of intense reads like Diary of a Wimpy Kid, which, believe it or not, make him ponder the complexities of human nature.</p>
                <p>He also excels in Humanities subjects, often wondering if he should have taken the Arts route instead.</p>
            </div>
            <div className='social-icons'>
                <a href="mailto:210100155@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
            </div>
        </div>
    </div>

	</div>
    
    <div className='team_container'>
    <div className='thecard'>
        <div className='team_ frontpage' data-aos="zoom-in">
            <img src={Harshita} alt="Harshita Agarwal" />
            <h2>Harshita Agarwal</h2>
            <p>5th Year CR</p>
        </div>
        <div className='team_ backpage'>
            <h2>Harshita Agarwal</h2>
            <div className="scrollable-content">
                <p>A spirited Potterhead </p>
                <p>Always on the move and ready for the next adventure! Whether she’s busting a move on the dance floor or smashing it on the badminton court.</p>
                <p>She believes life is all about thrilling escapades sprinkled with a little bit of magic!</p>
                <p>With a heart full of excitement and a love for the extraordinary, she is always seeking out the next enchanting experience!</p>
            </div>
            <div className='social-icons'>
                <a href="mailto:20d100010@iitb.ac.in" className="email" style={{color:"#0A66C2"}}><i class="bi bi-envelope"></i></a>
            </div>
        </div>
    </div>

	</div>
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
  )
}

export default Team