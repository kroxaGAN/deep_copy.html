
import style from './Skill.module.css'

type PropsType={
    title:string
    description:string
}

export const Skill=(props:PropsType)=>{
    return(
        <div className={style.skill}>
            <div className={style.icon}>XXX</div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}