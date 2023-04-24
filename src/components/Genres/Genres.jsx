import { genre } from "../../api/genres";
import { GenresList } from "../GenresList/GenresList";
import s from "./style.module.css"
export function Genres({onGenreClick}) {

    return (
        <div>
            <div className={s.list}>

                {genre.map((genres) => {
                    return (
                        <span className={s.tv_show_items} key={genres.id}>
                            <GenresList onClick={onGenreClick} genre={genres} />
                        </span>
                    );
                })}

            </div>
        </div>
    );
}