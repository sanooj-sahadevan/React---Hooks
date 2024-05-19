/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

function ABC() {
  const [name, setName] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (name === 5) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setUsers(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }

    if (name === 7) {
      setUsers([]);
    }

  }, [name]

 


); // Dependency array should include name to watch for changes

  useEffect(() => {
    document.title = `click ${name}`;
  }, [name]); // Add `name` as a dependency to update title only when `name` changes

  const plus = () => {
    setName((e) => e + 1);
  };

  const minus = () => {
    setName((e) => e - 1);
  };

  return (
    <div>
      <button className="btn" onClick={plus}>
        ouch++
      </button>
      <p>{name}</p>
      <button className="btn" onClick={minus}>
        ouch--
      </button>
      <div>
        <h3>Users List</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ABC;
