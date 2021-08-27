import React from 'react'
import starIcon from './assets/star.png'
import halfStarIcon from './assets/halfStarIcon.png'


const StarRatings = ({ rating }) => {
    rating = ((rating * 10) / 20).toFixed(1)
    return (
        <div className="star-rating">
            <small>({rating})</small>
            {Array.from({ length: rating }, (v, i) => i).map((index) => <img className="star-icon" src={starIcon} alt="" key={index} />)}
            {rating > Math.floor(rating) && <img className="star-icon" src={halfStarIcon} alt="" />}
        </div>
    )
}

export default StarRatings