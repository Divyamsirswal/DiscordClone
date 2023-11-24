import Button from "@mui/material/Button";
import style from "./Comunity.module.css";

export default function Comunity() {
  return (
    <div className={style.main_page}>
      <div className={style.wrapper_circle}>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
      </div>
    </div>
  );
}
