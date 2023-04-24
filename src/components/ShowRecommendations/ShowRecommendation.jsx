import s from "./style.module.css";
import { COVER_IMAGE } from "../../api/config";
const MAX_TITLE_CHAR = 20;
export function ShowRecommendation({ tvShow, onClick }) {
  //console.log(tvShow);
  const onClick_ = () => {
    //console.log("Clicked " + tvShow.name);
    onClick(tvShow);
  };
  /*const recom=[];
    for(const rec of ShowRecommendation){
      recom.push(ShowRecommendation[rec])
    }
  for (const rec of recom) {
    console.log(recoms[rec]);
  }*/
  return (
    <>
      {tvShow.backdrop_path != null ? (
        <div onClick={onClick_} className={s.container}>
          <img
            alt={tvShow.media_type === "movie" ? tvShow.title : tvShow.name}
            src={COVER_IMAGE + tvShow.backdrop_path}
            className={s.img}
          />
          <div className={s.title}>
            {tvShow.media_type === "movie"
              ? tvShow.title.length > MAX_TITLE_CHAR
                ? tvShow.title.slice(0, MAX_TITLE_CHAR) + "..."
                : tvShow.title
              : tvShow.name.length > MAX_TITLE_CHAR
              ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
              : tvShow.name}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
