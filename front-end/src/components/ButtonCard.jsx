import rightArrow from "../assets/arrow-right-medium.svg"

function ButtonCard(props) {
  return(
    <a href={props.link} className="z-20">
      <div className="flex w-full gap-[18px] sm:w-[380px] h-[108px] items-center justify-center rounded-[20px] bg-primary-200 text-violet-100 font-main-light drop-shadow-primary overflow-hidden">

        {props.background && <img src={props.background} className="absolute right-9 bottom-5 w-[140px]"/>}

        <div className="flex flex-col gap-[2px]">
          <span className="w-[248px] text-[1.33em] leading-[1.25em] block">
            {props.title}
          </span>
          <p className="font-main-light-italic">
            {props.description}
          </p>
        </div>
        <img src={rightArrow} />
      </div>
    </a>
  )
}

export default ButtonCard;