import { Link } from "react-router-dom" 
import "./Home.css"


export  function Home (){
    return (
        <div className="content">
          <h1 className="home">JOIN MILLION <br/>OF FANS</h1>
          <p>Join our community of fans around the globe (yeas it is a globe)</p>
          <Link to="/register" className="button">JOIN NOW</Link>
        </div>
    )
  }
  