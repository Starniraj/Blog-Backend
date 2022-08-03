import React from 'react'
import { NavLink} from 'react-router-dom';

const Card = (props) => {
  const { imgUrl, title, description, articleid } = props;
  return (
    <NavLink state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`/category/${articleid}`}>
      <div className={articleid}>
        <div className="card__container" >
          <div className='card__image'>
            <img src={imgUrl} alt="Not found"/>
          </div>
          <div className='bigcard__data'  >
            <h3 >{title}</h3>
            <p>{description}....</p>
          </div>
        </div>
        {/* <hr style={{ fontWeigt: "10px", color: "red" }} /> */}
      </div></NavLink>
  )
}

export default Card