import s from "./style.module.css";
export function Logo(props) {
  return (
    <>
      <div className={s.container}>
        <div className={s.title}>{props.title}</div>
      </div>
    </>
  );
}
