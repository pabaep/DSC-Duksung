import React from 'react';
//import { Link } from 'react-router-dom';
 
const Home = () => {
  return (
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/">홈</Link>
    //     </li>
    //     <li>
    //       <Link to="/Board">게시판</Link>
    //     </li>
    //     <li>
    //       <Link to="/LogIn">로그인</Link>
    //     </li>
        
    //   </ul>

    // </div>
    <nav>
        <ul> 
            <li>
                <a href="/">Home</a>
            </li> 
            <li>
                <a href="/Board">Notice Board</a>
            </li> 
            <li>
                <a href="/logIn">logIn</a>
            </li>
        </ul>

    </nav>
  );
};

export default Home;
