import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="location">
          <h2>
            Laxmi Devi Institute of <br /> Engineering & Technology
          </h2>
          <p className="pera">
            Alwar-Tijara-Delhi Highway <br /> Chikani, Alwar, Rajasthan <br />{" "}
            India – 301028 <br />
            <b>
              +91-7073477274 <br /> +91-9829103101
            </b>
            <br />
            director@lietalwar.org
          </p>
        </div>
        <div className="quicklink right">
          <h3>Quick Links</h3>
          <hr
            style={{
              height: "1px",
              width: "300px",
              color: "rgb(0, 255, 0)",
              backgroundColor: "rgb(0, 255, 0)",
            }}
          />

          {/* <hr /> */}
          <p className="pera">
            About Us <br />
            Admission <br />
            Apply @ LIET <br />
            Board of Management <br />
            Grievance Redressal
          </p>
        </div>

        <div className="courses right">
          <h3>Courses</h3>
          <hr
            style={{
              height: "1px",
              width: "300px",
              color: "rgb(0, 255, 0)",
              backgroundColor: "rgb(0, 255, 0)",
            }}
          />{" "}
          <p className="pera">
            B. Tech. <br />
            M. Tech. <br />
            MBA <br />
            Polytechnic
          </p>
        </div>
        <div className="external right">
          <h3>External Links</h3>
          <hr
            style={{
              height: "1px",
              width: "300px",
              color: "rgb(0, 255, 0)",
              backgroundColor: "rgb(0, 255, 0)",
            }}
          />

          <p className="pera">
            AICTE <br /> BTU <br /> BTER <br /> DELNET
          </p>
        </div>
      </div>
      <div className="nav2">
        <div className="first">
          <p>Copyright All Right Reserved 2023, LIET</p>
        </div>
        <div className="icons">
          <ul>
            <i class="fa-brands fa-facebook"></i>{" "}
          </ul>
          <ul>
            <i class="fa-brands fa-twitter"></i>{" "}
          </ul>
          <ul>
            <i class="fa-brands fa-instagram"></i>{" "}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
