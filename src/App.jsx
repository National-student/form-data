import { useState } from "react";
import "./App.css";

function App() {
  const [image, setImage] = useState(null);

  const [name, setName] = useState("");

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleImage = (e) => {
    const qiymat = e.target.files[0];
    setImage(qiymat);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const admin = {
      Id: Math.round(Math.random() * 1000),
      Name: name,
      Image: URL.createObjectURL(image),
    };

    setUser([admin, ...user]);
    localStorage.setItem("user", JSON.stringify([admin, ...user]));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" placeholder="Text" />
        <input onChange={handleImage} type="file" />
        <button>Send</button>
      </form>

      {user.length > 0 && (
        <ul>
          {user.map((item) => (
            <li key={item.Id}>
              <img src={item.Image} alt="rasm" width="150" />
              <h2>{item.Name}</h2>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
