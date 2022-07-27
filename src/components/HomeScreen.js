import Users from "./Users";
import {useState, useEffect} from 'react';

const HomeScreen = () => {
    const [keyword, setKeyword] = useState("");
  return (
    <div>
      <div>
        <h1 id="app-head" align={"center"}>Peoplesdex</h1>
        <input name="uname" id="uname" onChange={(e)=>{
            setKeyword(e.target.value);
        }} type="text" placeholder="Search For User" autoFocus/>
      </div>
      <Users keyword={keyword}/>
    </div>
  );
};

export default HomeScreen;
