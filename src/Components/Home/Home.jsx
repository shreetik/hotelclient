import video from "../../assets/herovid.mp4";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="height60 rel">
        <video autoPlay loop playsInline muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <nav className="d-flex justify-content-between align-items-center abs w-100">
          <span className="navtitle">Hotel hub</span>
          <div className="d-flex menu">
            <span>Home</span>
            <span>About</span>
            <span>Login</span>
            <span>Register</span>
          </div>
        </nav>

        <div className="hero-text">Your perfect stay is just a click away</div>

      
      </div>

      <section className="recomtab rel">
      <div className="search-hold d-flex flex-column abs">
          <div className="search-options d-flex align-items-center justify-content-between">
            
          <div class="input-container">
              <input
                type="text"
                id="location"
                name="location"
                placeholder=" "
              />
              <label for="location">Enter City or Location</label>
            </div>
            
            <div class="input-container">
              
              <input
                type="text"
                id="location"
                name="location"
                placeholder=" "
              />
              <label for="location">Check in</label>
            </div>

            <div class="input-container">
              <input
                type="text"
                id="location"
                name="location"
                placeholder=" "
              />
              <label for="location">Check out</label>
            </div>

           

            <div class="input-container">
              <input
                type="text"
                id="location"
                name="location"
                placeholder=" "
              />
              <label for="location">Rooms & Guests</label>
            </div>
          </div>
          <button className="btn-search">Search</button>
        </div>
      </section>
    </>
  );
}

export default Home;
