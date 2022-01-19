import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  const [user, setuser] = useState([]);
  const [img, setimg] = useState(true);
  const [loading, setloading] = useState(true);

  const loadusers = async () => {
    setloading(false);
    setimg(false);
    let url = "https://reqres.in/api/users?page=1";
    let data = await fetch(url);
    let parseddata = await data.json();
    setuser(parseddata.data);
    setloading(true);
  };
  return (
    <>
      <div className="App">
        <Navbar loadusers={loadusers} loading={loading} />
        <div>
          {user.map((i) => (
            <Card
              key={i.key}
              image={i.avatar}
              firstname={i.first_name}
              lastname={i.last_name}
              email={i.email}
              id={i.id}
            />
          ))}
        </div>
      </div>
      {!img ? (
        img
      ) : (
        <div className="tempimg">
          <img
            src="https://letsgrowmore.in/wp-content/uploads/2021/05/cropped-growmore-removebg-preview.png"
            alt=""
          />
        </div>
      )}
    </>
  );
}
