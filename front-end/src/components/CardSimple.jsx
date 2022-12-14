import durationIcon from "../assets/briefcase-dark.svg";
import calendarIcon from "../assets/calendar-dark.svg";
import tagIcon from "../assets/tag-dark.svg";
import LargeButton from "./LargeButton";
import arrowRight from "../assets/arrow-right-small.svg";

function CardSimple(props) {
    return(
      <div className="flex flex-col max-w-[440px] min-w-[400px] px-[42px] pt-[42px] pb-[52px] overflow-hidden bg-base-100 text-primary-200 rounded-[20px] drop-shadow-primary z-20">
        <div className="flex flex-col gap-[42px]">
          <div>
            <div className="flex gap-[10px]">
              <img src={durationIcon} />
              <span className="text-[1.33em] font-main-semibold-italic block leading-[1.25em]">duração</span>
            </div>
            <p className="pl-[30px] font-main-light-italic text-[1.78em] leading-[1.25em]">{props.duration}</p>
          </div>
          
          <div>
            <div className="flex gap-[10px]">
              <img src={calendarIcon} />
              <span className="text-[1.33em] leading-[1.25em] font-main-semibold-italic block">datas</span>
            </div>
            <div className="pl-[30px]">
              {props.date}
            </div>
          </div>

          <div>
            <div className="flex gap-[10px]">
              <img src={tagIcon} />
              <span className="text-[1.33em] leading-[1.25em] font-main-semibold-italic block">valor</span>
            </div>
            <p className="pl-[30px] font-main-light-italic text-[1.78em] leading-[1.25em]">{props.price}</p>
          </div>

          <div className="self-center drop-shadow-tertiary">
            <LargeButton text="Inscreva-se" icon={arrowRight}/>
          </div>
        </div>
      </div>
    )
}

export default CardSimple;