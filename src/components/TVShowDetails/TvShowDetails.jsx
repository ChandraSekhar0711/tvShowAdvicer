import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";
export function TvShowDetails({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  console.log(tvShow);
  console.log(tvShow.title);
  return (
    <div className={s.con}>
      <div className={s.title}>
        {tvShow.media_type === "movie" ? tvShow.title : tvShow.name}
      </div>

      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />
        <span className={s.rating}>{rating}/5</span>
      </div>
      <div className={s.aired}>Aired On : {tvShow.release_date}</div>
      <div className={s.overview}>{tvShow.overview}</div>
    </div>
  );
}
