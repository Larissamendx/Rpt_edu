import durationIcon from "../assets/briefcase-clock.svg"
import calendarIcon from "../assets/calendar.svg"
import tagIcon from "../assets/tag.svg"
import rightArrow from "../assets/arrow-right-small.svg"
import NavigateButton from "./NavigateButton";

function Card(props) {
    return(
      <div className={`flex min-w-[340px] flex-col w-full sm:w-[380px] h-min min-h-[640px] overflow-hidden text-base-100 rounded-3xl drop-shadow-primary z-20
      ${props.variant === 'primary' ? 'bg-primary-200' : 'bg-primary-400'}`}>
        {props.background &&
          <div className="absolute right-[51px] top-[-104px] w-max">
            <img src={props.background} />
          </div>
        }
        <div className="flex-1">
          <div className="px-12 pt-[38px] pb-[28px]">
            <img src={props.logo} />
          </div>
          <div className="flex flex-col gap-6 mb-[36px]">
            <div className="flex flex-col px-7">
              <div className="flex gap-[10px]">
                <img src={durationIcon} />
                <span className="text-[1.33em] leading-[1.25em] font-main-semibold-italic block">duração</span>
              </div>
              {props.duration && 
                <ul className="pl-[30px]">
                  {props.duration.map((duration, index) => <li key={index}>{duration}</li>)}
                </ul>
              }
            </div>
            <div className="flex flex-col px-7">
              <div className="flex gap-[10px]">
                <img src={calendarIcon} />
                <span className="text-[1.33em] leading-[1.25em] font-main-semibold-italic block">datas</span>
              </div>
              {props.date && 
                <ul className="flex flex-col gap-[10px] pl-[30px]">
                  {props.date.map((date, index) => <li key={index}>{date}</li>)}
                </ul>
              }
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col px-7">
                <div className="flex gap-[10px]">
                  <img src={tagIcon} />
                  <span className="text-[1.33em] leading-[1.25em] font-main-semibold-italic block">valor</span>
                </div>
                <div className="font-main-italic pl-[30px]">
                  {props.value}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[14px] bg-salmon-100/[0.27] px-[42px] py-[22px]">
          <strong className="text-[1.33em] leading-[1.25em] font-main-bold">{props.info}</strong>
          <div className="drop-shadow-secondary">
            <NavigateButton link={props.link} text="Detalhes" icon={rightArrow}/>
          </div>
        </div>
      </div>
    )
}

export default Card;