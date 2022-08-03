import React,{useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'


const Home = () => {

const[data , setData] = useState([])
    useEffect(() => {
        fetch(`https://niraj-backend.herokuapp.com/api/details`).then(res => res.json())
        .then(res => setData(res))
    }, [])
    
    console.log(data);
  return (

    <div>
    <div  className='Home'>
      
        <div className="home__container">
      <div className="home__first">
        <Link to ="/Technology"><img src='https://thumbs.dreamstime.com/b/internet-information-technology-businessman-hand-showing-concept-75784736.jpg'alt="Not found"/></Link>
      </div>
      <div className="home__sec">
       <Link to="/fitness" > <img src="https://www.fitnessfirst.co.id/-/media/project/evolution-wellness/fitness-first/south-east-asia/malaysia/blog/start-exercising-again-after-a-long-break/start-exercising-again-after-a-long-break-tile.jpg" alt="Not found" /></Link>
       
      </div>
      </div>
      <div className="home__thir">
      <Link to="/food" > <img src="https://stauntontasteofindia.com/x/cdn/?https://storage.googleapis.com/wzukusers/user-18599341/images/5bc7736664f3ddSihFB6/ThinkstockPhotos-177043240_d1000.jpg" width="900px" alt="Not found" /></Link>

          </div>
          <h1 style={{marginTop:"40px"}}>The Latest</h1>
          <hr style={{width:"200px",  thickness:"20px",position:"relative",right:"100px", color:"red"}} />
          <div className='home__left left1'>
                    {
                        data.filter((article) => { return article.category === "movies" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}

                                description={n.description.slice(0, 250)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        data.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}

                                description={n.description.slice(0, 250)}

                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        data.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}

                                description={n.description.slice(0, 250)}

                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Articles</h1>
                
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px",  thickness:"20px"}} />
                

                <div className='rightbar2'>
                    {
                        data.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 250)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        data.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }
                

                    <div className='advertisement'>
                       <p>Advertisement</p>
                       
                    </div>
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                        data.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 250)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        data.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 250)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        data.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 250)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                    
    </div>
    </div>

  )
}

export default Home