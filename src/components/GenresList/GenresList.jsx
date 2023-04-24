import s from "./style.module.css"
export function GenresList ({onClick,genre}){
    const onClick_ = () =>{
        console.log(genre.name,genre.id);
        onClick(genre);
    }
    return(
        <>
        <div className={s.container} onClick={onClick_}>
            {genre.name}
        </div>
        </>
    )
}