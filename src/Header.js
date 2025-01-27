import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";


export default function Header() {
  const {setUserInfo, userInfo} = useContext(UserContext);
  // gives an empty cookie in request first time on site, backend jwt verification error
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      // use cookie that api gave
      response.json().then(userInfo => {
        // console.log(userInfo);
        setUserInfo(userInfo);
      // when user enters site, backend throws error, this prevents client from seeing error
      }).catch((error) => {
        setUserInfo(null);
      })
    });
  }, []);

  // logout function handled on backend
  function logout(){
    fetch('http://localhost:4000/logout', {
      credentials:'include',
      method:'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">MyBlog</Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link to="/" onClick={logout}>Logout</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

      </nav>
    </header>
  );
}
