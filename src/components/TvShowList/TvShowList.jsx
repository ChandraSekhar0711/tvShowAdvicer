import { ShowRecommendation } from "../ShowRecommendations/ShowRecommendation";
import { TvShowDetails } from "../TVShowDetails/TvShowDetails";
import s from "./style.module.css";
export function TvShowList({ tvShowList, onClickShow }) {
  return (
    <div>
      <div className={s.title}>You Will Probably Like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_items} key={tvShow.id}>
              <ShowRecommendation onClick={onClickShow} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
