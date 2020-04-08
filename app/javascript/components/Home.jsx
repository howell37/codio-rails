import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default () => (
  //   <div id="homepageMainDiv">
  //     <Navigation />
  //     <div
  //       id="homepageDiv"
  //       className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center"
  //     >
  //       <div id="intro">
  //         <h1 className="display-4">Jaboa Howell</h1>
  //         <p className="lead">An ambitious Web Developer</p>
  //         <hr className="my-4" />
  //         <div id="social">
  //           <a href={"http://github.com"} target={"_blank"}>
  //             <img
  //               id="githubImg"
  //               src="https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F2107379463%2Ficons%2Fmonochrome_large.png%3Fversion%3D0?w=240&h=240&auto=compress&s=a8d2b0cf3024bd42a147246f26af6918"
  //               alt=""
  //             />
  //           </a>
  //           <a href={"http://github.com"}>
  //             <img
  //               id="linkedInImg"
  //               src="https://www.vhv.rs/file/max/8/80786_linkedin-logo-white-png.png"
  //               alt=""
  //             />
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  <div className="stars">
    <div className="twinkling">
      <div className="clouds">
        <div id="homepageMainDiv">
          <Navigation />
          <div
            id="homepageDiv"
            className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center"
          >
            <div id="intro">
              <h1 id="name" className="display-4">
                Jaboa Howell
              </h1>
              <p className="lead">An ambitious Web Developer</p>
              <hr className="my-4" />
              <div id="social">
                <a href={"http://github.com"} target={"_blank"}>
                  <img
                    id="githubImg"
                    src="https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F2107379463%2Ficons%2Fmonochrome_large.png%3Fversion%3D0?w=240&h=240&auto=compress&s=a8d2b0cf3024bd42a147246f26af6918"
                    alt=""
                  />
                </a>
                <a href={"http://github.com"}>
                  <img
                    id="linkedInImg"
                    src="https://www.vhv.rs/file/max/8/80786_linkedin-logo-white-png.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
