import React from 'react'

function ReviewCard({review,index}) {
  return (
    <div className='review-card'>
        <img src="https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/400/1.5x/cbbc/bp-film-review-title.jpg" alt="" style={{width:'100%',borderRadius:'10px'}}/>
        <h4>Title: {review.display_title}</h4>
        <h5>Headline: {review.headline}</h5>
        <h5>Byline: {review.byline}</h5>
        <h5>Cricts Picks: {review.critics_pick}</h5>
    </div>
  )
}

export default ReviewCard