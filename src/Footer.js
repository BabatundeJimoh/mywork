function Footer() {
  return (
    <div className="row">
      <div
        className="col-md-12"
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "white",
          fontSize: "13px",
        }}
      >
        <div className="card" style={{ backgroundColor: "brown" }}>
          <p style={{ marginTop: "20px" }}>
            &copy Pizzamania all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
