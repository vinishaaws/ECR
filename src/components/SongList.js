import React, { useEffect, useState } from "react";

const SongList = () => {
  const [songs, setSong] = useState([
    { id: 1, name: "ABC" },
    { id: 2, name: "CDE" },
    { id: 3, name: "EFG" },
    { id: 4, name: "EHI" }
  ]);

  const [age, setAge] = useState(20);

  const addSong = () => {
    setSong([...songs, { id: 1, name: "ABC" }]);
  };

  const changeAge = () => {
    setAge(age + 1);
  };

  useEffect(
    e => {
      console.log("changed");
    },
    [songs, age]
  );
  // or use separately
  //   useEffect(
  //       e => {
  //           console.log(" age changed");
  //       },
  //       [age]
  //   );

  return (
    <div>
      {songs.map(song => {
        return <div key={song.id}>{song.name}</div>;
      })}
      {age}
      <button onClick={addSong}>Add</button>
      <button onClick={changeAge}>Age Change</button>
    </div>
  );
};

export default SongList;
