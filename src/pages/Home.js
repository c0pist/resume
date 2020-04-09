import React from 'react';

const Home = () => {

    let source = 
    (
      
      <React.Fragment>

        <head>
          <meta name="viewport" content="width=device-width"/>
          <meta name="description" content="The Curriculum Vitae of Joe Bloggs."/>
          <meta charset="UTF-8"/> 

          <link type="text/css" rel="stylesheet" href="css/home_style.css"/>
          <link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'/>

        </head>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Inhee Kim</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
         
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Resume <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/More">More</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul> 
          
          </div>
        </nav>

        
        <div id="cv" class="instaFade">
          <div class="mainDetails">
            <div id="headshot" class="quickFade">
              <img src="headshot.jpg" alt="Alan Smith" />
            </div>
            
            <div id="name">
              <h1 class="quickFade delayTwo">Inhee Kim</h1>
              <h2 class="quickFade delayThree">Job Title</h2>
            </div>
            
            <div id="contactDetails" class="quickFade delayFour">
              <ul>
                <li>e: <a href="mailto:joe@bloggs.com" target="_blank">ihkim920@gmail.com</a></li>
                <li>w: <a href="http://www.bloggs.com">www.bloggs.com</a></li>
                <li>m: 2045991221</li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
          
          <div id="mainArea" class="quickFade delayFive">
            <section>
              <article>
                <div class="sectionTitle">
                  <h1>Personal Profile</h1>
                </div>
                
                <div class="sectionContent">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor metus, interdum at scelerisque in, porta at lacus. Maecenas dapibus luctus cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </div>
              </article>
              <div class="clear"></div>
            </section>
            
            
            <section>
              <div class="sectionTitle">
                <h1>Work Experience</h1>
              </div>
              
              <div class="sectionContent">
                <article>
                  <h2>Job Title at Company</h2>
                  <p class="subDetails">April 2011 - Present</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </article>
                
                <article>
                  <h2>Job Title at Company</h2>
                  <p class="subDetails">Janruary 2007 - March 2011</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                </article>
                
                <article>
                  <h2>Job Title at Company</h2>
                  <p class="subDetails">October 2004 - December 2006</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
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
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
                  <li>A Key Skill</li>
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
                  <h2>College/University</h2>
                  <p class="subDetails">Qualification</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                </article>
                
                <article>
                  <h2>College/University</h2>
                  <p class="subDetails">Qualification</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
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
      </React.Fragment>
      );

    return source;
};
export default Home;