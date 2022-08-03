import React, { useEffect, useState } from 'react'

import Card from '../Component/Card'

const Fitness = () => {
    const[data , setData] = useState([])
    useEffect(() => {
        fetch(`https://niraj-backend.herokuapp.com/api/details`).then(res => res.json())
        .then(res => setData(res))
    }, [])
    
    console.log(data);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Fitness</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        data.filter((article) => { return article.category === "Fitness" }).map((n) => (
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

                
                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
               
            </div>
    )
}
export default Fitness