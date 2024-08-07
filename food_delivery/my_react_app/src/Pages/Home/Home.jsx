import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'

const Home = () => {
  
  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu/>
    </div>
  )
}

export default Home
