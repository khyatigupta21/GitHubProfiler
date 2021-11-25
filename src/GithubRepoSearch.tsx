import { useState, useEffect } from "react";
import { GetRequest, GetRepos } from "./Utilities/Network";
import "./App.css";

const GithubProfileSearch = (props: any) => {
  const [searchInput, setSearchInput] = useState("");
  const [userProfile, setUserProfile] = useState<any>({});
  const [userRepos, setUserRepos] = useState<any>([]);

  const _handleSearchProfile = async () => {
    const apiResponse = await GetRequest(
      `https://api.github.com/users/${searchInput}`
    );
    if (!apiResponse) {
      return;
    }
    setUserProfile(apiResponse);
    console.log("Line no 15", apiResponse);
  };
  useEffect(() => {
    console.log("Indside UseEffect of Repos");
    //Getting users all repositories
    // console.log("userProfile.repos_url " + userProfile.repos_url);
    const getRepos = async () => {
      const apiReposResponse = await GetRepos(userProfile.repos_url);
      if (!apiReposResponse) {
        return;
      }
      console.log("Line no 28", apiReposResponse);
      setUserRepos(apiReposResponse);
    };
    getRepos();
  }, [userProfile?.login]);
  //Rendering List
  let repoList = userRepos.map((userRepos: any) => (
    <li key={userRepos.id} value={userRepos.id}>
      {userRepos.name}
    </li>
  ));
  return (
    <div className="App">
      <div>
        <input
          className="MovieSearch"
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <p>{searchInput}</p>
        <button onClick={_handleSearchProfile}>Search</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <img width={100} height={100}  src={userProfile.avatar_url} />
          <p>
            {userProfile.name}
          </p>
        </div>
        <div>
          <ul style={{ overflow: "scroll" }}>
            <li style={{ listStyleType: "none", height: "250px" }}>
              {repoList}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GithubProfileSearch;
