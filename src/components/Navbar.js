import React from "react";

export default function App(props) {
  return (
    <>
      <div className="navbar">
        <div className="leftnav">
          <ul className="left">
            <li id="font">Lets Grow More</li>
          </ul>
        </div>
        <div className="rightnav">
          {props.loading ? props.loading : <div class="spin"></div>}

          <button id="btn" onClick={props.loadusers}>
            GET USERS
          </button>
        </div>
      </div>
    </>
  );
}
