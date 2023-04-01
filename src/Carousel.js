function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnLSw-3r7uRpuYC0uJVE0lqm-YY5bBA0O_OQ&usqp=CAU/800x400?auto=yes&bg=666&fg=444&text=Second slide"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgyAbWWaMC6sf7cBKNDpYdpMlkM3gAgPleg&usqp=CAU/800x400?auto=yes&bg=555&fg=333&text=Third slide"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
