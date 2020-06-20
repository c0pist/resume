import React from 'react';
import "./css/home_style.css";
import Logo from "./css/profile.jpg";
const Home = () => {

    let source = 
    (
      
      <React.Fragment>

        <head>
          <meta name="viewport" content="width=device-width"/>
          <meta name="description" content="Inhee Kim Blog"/>
          <meta charset="UTF-8"/> 

          
          <link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'/>
          
        </head>
        
        <div class="bgColor">
          

          
          <div id="cv" class="instaFade">
            <div class="mainDetails">
              <div id="Profile" class="quickFade">
                <img src={Logo} alt="Profile" />
              </div>
              
              <div id="name">
                <h1 class="quickFade delayTwo">Inhee Kim</h1>
                <h2 class="quickFade delayThree">Software Developer</h2>
              </div>
              
              <div id="contactDetails" class="quickFade delayFour">
                <ul>
                  <li>e: <a href="mailto:ihkim920@gmail.com" target="_blank">ihkim920@gmail.com</a></li>
                  <li>w: <a href="http://react.c0pist.kro.kr/">http://react.c0pist.kro.kr/</a></li>
                  <li>m: 2045991221</li>
                </ul>
              </div>
              <div class="clear"></div>
            </div>
            
            <div id="mainArea" class="quickFade delayFive">

              <section>
                <div class="sectionTitle">
                  <h1>Work Experience</h1>
                </div>
                
                <div class="sectionContent">
                  <article>
                    <h2>Tilesetter at Fabris & Watts (2015) Ltd.</h2>
                    <p class="subDetails">October 2018 - Present</p>
                    <p>
                      Set tiles in place and apply pressure to affix them to base
                      Team working, reliable, adjusting to fast pace environment are required
                    </p>
                  </article>
                  
                  <article>
                    <h2>Software Developer at TMP LTD. - Dublin, Ireland</h2>
                    <p class="subDetails">July 2013 - November 2014</p>
                    <p>Developed / maintained Windows software tool in C#.Net.<br/>Developed / updated the website built in ASP. Net & MySQL</p>
                  </article>
                  
                  <article>
                    <h2>Software Developer at VITCON</h2>
                    <p class="subDetails">May 2010 - October 2012</p>
                    <p>Developed new Windows softwares in C#.Net &<br/>VB, Developed new Atmel microchip compiling software in C#.net.<br/>Maintained and upgraded the all software projects.</p>
                  </article>
                </div>
                <div class="clear"></div>
              </section>
              
              
              <section>
                <div class="sectionTitle">
                  <h1>Key Skills</h1>
                </div>
                
                <div class="sectionContent">
                  <ul class="keySkills">
                    <li>C#.Net</li>
                    <li>ASP.Net</li>
                    <li>Javascript(React)</li>
                    <li>HTML</li>
                    <li>MySQL</li>
                    <li>MS Office</li>
                    <li>Tiling skills</li>
                    <li>Teamwork</li>
                    <li>Leadership</li>
                  </ul>
                </div>
                <div class="clear"></div>
              </section>
              
              
              <section>
                <div class="sectionTitle">
                  <h1>Education</h1>
                </div>
                
                <div class="sectionContent">
                  <article>
                    <h2>ComIT - Winnipeg, MB Canada</h2>
                    <p class="subDetails">Completion Certificate (2019)</p>
                    <p>3 months C#.Net & ASP.Net MVC course</p>
                  </article>
                  
                  <article>
                    <h2>Korea National Open University - Seoul, South Korea</h2>
                    <p class="subDetails">Bachelor's degree(2009-2012)</p>
                    <p>Computer Science</p>
                  </article>
                </div>
                <div class="clear"></div>
              </section>
              
            </div>
          </div>
          <script type="text/javascript">
          var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
          document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
          </script>
          <script type="text/javascript">
          var pageTracker = _gat._getTracker("UA-3753241-1");
          pageTracker._initData();
          pageTracker._trackPageview();
          </script>
        </div>
      </React.Fragment>
      );

    return source;
};
export default Home;