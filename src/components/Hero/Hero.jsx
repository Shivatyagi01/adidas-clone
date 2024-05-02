import React,{useState,useRef} from "react";
import { FiArrowRight,FiPlayCircle,FiPauseCircle } from "react-icons/fi";
import Video from "../../assets/hero.mp4";
const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlay = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="heroWrapper relative">
      <div className="video">
        <video ref={videoRef} className="w-full" autoPlay muted>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="heroContent absolute bottom-8 left-0 pl-12">
        <h1 className="text-4xl text-white font-black font-custom pb-4">
          SAMBA, SPEZIAL & GAZELLE
        </h1>
        <p className="text-md text-white font-regular font-custom pb-4">
          Three icons, a thousand stories.
        </p>
        <a
          href="#"
          className="text-sm uppercase font-medium text-black bg-white p-3 inline-flex items-center gap-2 rounded-sm font-custom"
        >
          Shop Now <FiArrowRight />
        </a>
        <button onClick={togglePlay} className="text-white block text-4xl pt-4">
          {isPlaying ? <FiPauseCircle /> : <FiPlayCircle />}
        </button>
      </div>
    </div>
  );
};

export default Hero;
