import "./Preloader.css";

function Preloader() {
  return (
    <div className="circle-preloader-container">
      <div className="circle-preloader"></div>
      <p className="text-preloader">Searching...</p>
    </div>
  );
}

export default Preloader;
