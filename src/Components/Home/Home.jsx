import video from "../../assets/herovid.mp4";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="height60 rel mt-4">
        <video autoPlay loop playsInline muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className="overlay"></div>

        <div className="hero-text">Your perfect stay is just a click away</div>
      </div>
    </>
  );
}

export default Home;
