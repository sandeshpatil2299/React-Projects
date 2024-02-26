import './movies.css';

const Movies = (props) => {
   return (
      <div className='movie'>
         <div className="image">
            <img src={props.imgLink} alt="" />
         </div>
         <div className="details">
            <h2 className='movieName'>{props.title}</h2>
            <h2 className='movieYear'>Year : {props.year}</h2>
         </div>
      </div>
   )
}

export default Movies;
