import "./Footer.css"
import { ImLinkedin, ImGithub } from "react-icons/im";

const Footer = () => {
    return (
      <div className="footer-container">
        <div className="left-side-footer">
          <div>© 2023 Bed n Breakfast, Inc.</div>
          <div className="inner_div_1_content_home" id="SPAN_3">
            ·
          </div>
          <div className="host-experience-btn-footer">Host an Experience</div>
        </div>
        <div className="right-side-footer">
          <a
            className="linked-in-link"
            href="https://www.linkedin.com/in/austin-fenne"
          >
            {/* <i className="fa-brands fa-linkedin thelinkedin"></i> */}
            <ImLinkedin className="thelinkedin" />
            Visit my LinkedIn
          </a>
          <a
            className="github-link"
            href="https://github.com/FenneAustin/AirBnB"
          >
            <ImGithub className="thegithub"/> Checkout my Readme
          </a>
        </div>
      </div>
    );
}


export default Footer;
