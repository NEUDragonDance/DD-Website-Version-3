import { HOME_PAGE_PATH } from "../../constants";

function home(){
    return(
        // <!-- MAIN SECTION ------------------------------------------------------------- -->
			<div class="main-section">
				<div class="center">
					<a href="#about-us-header">
						<img class="arrow" id="arrow" src="res/Icons/White Downward Arrow.png" width="115px" alt="white down arrow"/>
					</a>
				</div>
				{/* <!-- HEADER: ABOUT US --> */}
				<div id="about-us">
                    <h2 class="header fade-in" id="about-us-header">About Us</h2>
                    <div class="flex-container" id="about-us-section">
                        <div class="about-us-pics flex-child">
                            <br />
                            <br />
                            <img class="about-us-pic fade-in" src={HOME_PAGE_PATH + "zipzopzip.jpg"} width="80%" alt="Northeastern Dragon Dance in a circle pose"/>
                            <img class="about-us-pic fade-in" src={HOME_PAGE_PATH + "Mathworks.webp"} width="80%" alt="Chinese Lion Dance performance by Northeastern University Dragon and Lion Dance Troupe"/>
                        </div>
                        <div class="about-us-text flex-child fade-in">
                            <p>We are a group of driven college students who spread Chinese culture through artful performances of traditonal Chinese Dragon Dance and Lion Dance.
                            <br />
                            <br />
                            The Northeastern University Dragon and Lion Dance Troupe was founded in 2015 with the goal to spread Chinese culture and give the opportunity to learn, practice, and be apart of these traditions. Initially starting as solely a Dragon Dance troupe, we expanded to Lion Dance in 2021.
                            <br />
                            <br />
                            Since then, we have grown to perform all over the Boston area, such as at different schools, companies and businesses, and cultural events, such as the 2022 and 2023 Asian American Festivals at Boston Common.</p>
                            <p class="orange-text">
                                <b><i>Thank you to
                                <a class="orange-text white-hover" target="_blank" rel="noreferrer noopener" href="https://www.yelp.com/biz/teriyaki-house-boston?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)">Teriyaki House</a>
                                for sponsoring us!
                                <br />
                                Check out their restaurant at 32 W Broadway, Boston MA.
                                </i></b></p>
                            <br />
                            <a href="JoinUs.html">
                                <button type="button" class="button-style fade-in">Our Team</button>
                            </a>
                        </div>
                    </div>
                                    {/* PUT INTO CSS FILE */}
                    <div style={{margin:"-40px;"}}></div>
                </div>

				{/* <!-- HEADER: BOOK A SHOW --> */}
				<div class="book-a-show-section">
					<h2 class="header fade-in" id="book-a-show-header">Book a Performance</h2>
					<p class="book-a-show-text fade-in">If you are looking to book us, <strong class="orange">please fill out the performance request form linked below.</strong> After reviewing your request, we will get back to you with our availability and discuss additional details and logistics (e.g. performance area / stage size, transportation, honorarium).
					<br />
					<br />
					Please don't hesitate to email us if you have any trouble accessing the form or have questions! We are also open to other inquiries!</p>

					<div class="get-in-touch text-center">
						<a target="_blank" rel="noreferrer noopener" href="https://docs.google.com/forms/d/e/1FAIpQLSfX1gIh31fbr0Np1npWYoc0GYcgXmKBXF4sZ8-pAAuQclhMqA/viewform?usp=sf_link" class="center icon-link-color">
							<button type="button" class="button-style fade-in" style={{display: "block; margin: 0 auto;"}}>Get in Touch!</button>
						</a>
						<br />
						<br />
						<br />
                        {/* PUT INTO CSS FILE */}
						<h3 class="orange fade-in" style={{textAlign: "center;"}}>
							<i>We've had the honor of performing for...</i>
						</h3>
                        {/* <!-- Changes spacing under "We've had the honor of performing for..." --> */}
						<div style={{margin: "-60px;"}}></div> 

						<img src="res/Icons/Client-Logos6.png" alt="Logos of the companies Arc'teryx, Artists for Humanity, Phillips, Pfizer, Dell Technologies, Mathworks, Vertex Pharmaceuticals, and Gong Cha" class="past-client-logos fade-in" margin="auto" />

						<br />
						<br />
						<br />
						<br />
					</div>

					{/* <!-- GOOGLE CALENDAR  ------------------------------------------------- --> */}
				<h1 class="fade-in">Our Calendar</h1>
				<div style={{margin:"-30px;"}}></div>
				<div class="calendar fade-in">
					<iframe title="Google Calendar"
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23be1e2e&showPrint=0&showTabs=0&showCalendars=0&title=Northeastern%20University%20Dragon%20%26%20Lion%20Dance%20Troupe&showTitle=0&src=NGlrNWZ1MTNhYmdjazhiaDM4bHZlbzRobGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E" 
                    style={{borderWidth: "0"}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
					<br />
					<br />
				</div>
				</div>
				<div style={{margin: "-110px;"}}></div>

				<div class="book-a-show-section">
						<h1>Recent Performances</h1>

					<div class="more-space-on-sides fade-in">

							<div class="responsive">
								<div class="gallery">
									<a target="_blank" rel="noreferrer noopener" href={HOME_PAGE_PATH + "John D O'Bryant School.jpg"}>
									<img src={HOME_PAGE_PATH + "John D O'Bryant School.jpg"} alt="Lion Dance Performance for Asian Night 2024 at John D. O'Bryant School of Mathematics and Science" width="600" height="400" class="pic" />
									</a>
									<div class="desc">Lion Dance Performance at John D. O'Bryant School of Mathematics and Science</div>
								</div>
							</div>

							<div class="responsive">
								<div class="gallery">
									<a target="_blank" rel="noreferrer noopener" href={HOME_PAGE_PATH + "Empower.png"}>
									<img src={HOME_PAGE_PATH + "Empower.png"} alt="Lion Dance Performance at NU Empower Annual Showcase" width="600" height="400" class="pic" />
									</a>
									<div class="desc">Lion Dance Performance at NU Empower Annual Showcase</div>
								</div>
							</div>

							<div class="responsive">
								<div class="gallery">
									<a target="_blank" rel="noreferrer noopener" href={HOME_PAGE_PATH + "BU TASA.jpg"}>
									<img src={HOME_PAGE_PATH + "BU TASA.webp"} alt="Dragon Dance Performance at BU TASA Night Market: Treasures of Taiwan" width="600" height="400" class="pic" />
									</a>
									<div class="desc">Dragon Dance Performance at BU TASA's<br />Night Market: Treasures of Taiwan</div>
								</div>
							</div>

							<div class="clearfix"></div>


							<div class="book-a-show-section">
								<div class="get-in-touch">
									<a rel="noreferrer noopener" href="Gallery.html" class="center icon-link-color">
										<button type="button" class="button-style-long" rel="noreferrer noopener" href="Gallery.html" style={{display: "block; margin: 0 auto;"}}>View Our Gallery</button>
									</a>
									<br />

								</div>
							</div>

							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
					</div>


				<div class="bottom-section">
					<div class="flex-container-2">
						<div class="join-our-team-section flex-child">
							<a href="https://neudragonliondance.org/JoinUs.html#join-us-header" class="link-color"><h3 class="italic-header">JOIN OUR TEAM!</h3></a>
							<p class="bottom-section-text">Northeastern University students are welcome to join, no experience necessary!</p>
						</div>

						<div class="flex-child">
							<div class="icon-div">
								{/* <!-- Instagram Icon --> */}
								<a target="_blank" rel="noreferrer" class="icon icon-link-color" href="https://www.instagram.com/neudragonliondance/">
									<img src="res/Icons/instagram-icon.png" width="60px" alt="Instagram Icon" />
								</a>

								{/* <!-- Facebook Icon --> */}
								<a target="_blank" rel="noreferrer" class="icon icon-link-color" href="https://www.facebook.com/NEUDragonLionDance">
									<img src="res/Icons/facebook-icon.png" width="63px" alt="Facebook Icon" />
								</a>

								{/* <!-- YouTube Icon --> */}
								<a target="_blank" rel="noreferrer" class="icon icon-link-color" href="https://www.youtube.com/@neudragonliondance">
									<img src="res/Icons/youtube-icon.png" width="66px" alt="Youtube Icon" />
								</a>

								{/* <!-- Email Icon --> */}
								<a target="_blank" rel="noreferrer" class="icon icon-link-color" href="mailto: neu.dragondance@gmail.com">
									<img src="res/Icons/mail-icon.png" width="66px" alt="Email Icon" />
								</a>

							</div>
							<div class="email">
								<p class="hover-orange">
                                    <a target="_blank" rel="noreferrer noopener" class="link-color" href="mailto: neu.dragondance@gmail.com">
                                    neu.dragondance@gmail.com</a>
                                </p>
							</div>
						</div>
					</div>

					<div class="bottom-credits-section">
						<p class="credits">Ⓒ NEU Dragon &#38; Lion Dance 2024 | Hosted on <a target="_blank" rel="noreferrer" class="serena-ng" href="https://github.com/NEUDragonDance/NEUDragonLionDance">GitHub</a> | Built by <a target="_blank" rel="noreferrer" class="serena-ng" href="https://www.serenang.com/">Serena Ng</a></p>
					</div>
				</div>
		
			</div> 
		</div>
    );
} export default home