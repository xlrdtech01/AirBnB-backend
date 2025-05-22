import './Review.css'
import Review from './Review';


const Reviews = (props) => {
  const userId = props.userId
  const reviews = props.reviews


  return (
    <>

      {reviews ?
      (reviews.map((review, i) => {
        return (
          <div key={i}>
            <Review review={review} userId={userId} />
          </div>
        );
      })
      ) : null
      }
    </>
  )

}


export default Reviews;
