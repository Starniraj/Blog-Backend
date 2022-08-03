import React, { useState , useEffect } from 'react'
// import { store } from './Details'
import Card from '../Component/Card'

const Tourism = () => {
    // const [detail] = useContext(store);
    const[data , setData] = useState([])
    useEffect(() => {
        fetch(`https://niraj-backend.herokuapp.com/api/details`).then(res => res.json())
        .then(res => setData(res))
    }, [])
    
    console.log(data);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Tourism: Andhra Pradesh</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        data.filter((article) => { return article.category === "Tourism" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 250)}
                            />
                        ))
                    }
                   
                </div>

                
                     <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
            </div>
    )
}
export default Tourism