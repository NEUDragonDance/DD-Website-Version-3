import { Link } from "react-router-dom";

function NavBar() {
    return(
        <>
            {/*
                <!-- TOP BAR ----------------------------------------------------------------------->
                <!-- contains top left logo and logo text and navigation bar -->
            */}
			<div class="top-bar" id="top-bar">
                <Link to="home">
				<div class="logo-top-left">
					<div class="small-logo">
					<img src="Dragon Dance Logo with Drop Shadow.png" width="150" height="150" 
                        alt="Logo of the Northeastern University Dragon and Lion Dance Troupe"/>
					</div>
                    </div>
				    </Link>
                    
					<div class="logo-top-left-text">
						<h3 class="neu-logo-text">NORTHEASTERN UNIVERSITY</h3>
						<h3 class="dd-logo-text">Dragon &#38; Lion Dance Troupe</h3>
						<h3 class="chinese-logo-text">東北大學舞龍舞獅團</h3>
					</div>
                </div>
                {/*
                    <!-- Horizontal navigation bar (for wide screens) -->
                */}
				<div class="topnav">
					<Link to="book-a-show-header">Get in Touch</Link>
					<Link to="https://neudragonliondance.org/JoinUs.html#join-us-header">Join Us</Link>
					<Link to="JoinUs">Our Team</Link>
					<Link to="Gallery">Gallery</Link>
					<Link to="about-us-header">About</Link>
					<Link to="home" style={{color: "#FAAE58"}}
                    >Home</Link>
					<span onclick="openNav()">
						<a href="javascript:void(0);" class="icon" onclick="myFunction()">
							<i class="fa fa-bars"></i>
						</a>
					</span>
				</div>
                {/*
                    <!-- The overlay menu used for smaller screens -->
                */}
				<div id="myNav" class="overlay">

                    {/*
					    <!-- Button to close the overlay navigation --> 
                    */}
					<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    {/*
					    <!-- Overlay content -->
                    */}
					<div class="overlay-content">
						<Link href="home" style={{color: "#FAAE58"}}>Home</Link>
						<Link href="about-us-header">About</Link>
						<Link href="Gallery">Gallery</Link>
						<Link href="JoinUs">Our Team</Link>
						<Link href="https://neudragonliondance.org/JoinUs.html#join-us-header">Join Us</Link>
						<Link href="book-a-show-header">Get in Touch</Link>
					</div>
				</div>
            {/*
                <!-- TOP SECTION -------------------------------------------------------------- -->
            */}
			<div class="top-section" id="top-section">
				<div class="main-pic">
					<picture>
						<img src="NEU Dragon Dance Performance.jpeg"
                                srcset="NEU Dragon Dance Performance.jpeg" type="image/webp" 
                                width="100%" 
                                alt="Dragon dance performance by Northeastern University Dragon and Lion Dance Troupe"/>
                               

						{/* <img src="Dragon and Lion Dance Thumbnail Image.webp"
                            srcset="Dragon and Lion Dance Thumbnail Image.webp" type="image/webp" width="100%" 
                        alt="Dragon dance performance by Northeastern University Dragon and Lion Dance Troupe"/> */}
					</picture>
				</div>

                {/*
                    <!-- Used for spacing purposes (underneath other visual elements)-->
                */}
				<div class="spacing-pic">
				</div>
                {/*
                    <!-- red gradient from the top -->
                */}
				<div class="input-color">
					<div class="red-gradient" style={{background: "linear-gradient(0deg, rgba(190,30,46,1) 0%,  rgba(190,30,46,1) 24%, rgba(190,30,46,0.8744091386554622) 42%, rgba(190,30,46,0.6503195028011204) 60%, rgba(0,0,0,0) 100%)"}}
                    >
						<div class="big-logo-text fade-in">
							<h2 class="big-neu-logo-text-mobile">NORTHEASTERN UNIVERSITY</h2>
							<h2 class="big-dd-logo-text-mobile">Dragon &#38; Lion Dance Troupe</h2>
							<h2 class="big-neu-logo-text">NORTHEASTERN UNIVERSITY</h2>
							<h2 class="big-dd-logo-text">Dragon &#38; Lion Dance Troupe</h2>

						</div>
					</div>

					<div class="midsize-screen-red-background">
						
					</div>

				</div>
			</div>
        </>
    );
} export default NavBar