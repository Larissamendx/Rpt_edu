import LargeButton from "./LargeButton";
import rightIcon from "../assets/arrow-right-small.svg"
import griBackground from "../assets/gri-background-orange.svg";
import vrfBackground from "../assets/vrf-background-orange.svg";

function CourseCard(props) {
  return(
    <div className={`relative overflow-hidden flex flex-col gap-[24px] max-w-[480px] px-10 lg:pl-[100px] pt-[50px] pb-[60px] 
    lg:pr-[60px] lg:min-w-[480px] max-h-[600px] text-base-100 rounded-3xl z-20
      ${props.variant === 'primary' ? 'bg-primary-200' : 'bg-primary-400'}`
    }>

      {props.variant === "primary" ? 
        <img src={griBackground} className="absolute right-[51px] top-[-104px] w-max"/> : 
        <img src={vrfBackground} className="absolute left-[-164px] top-[-44px] w-[344px]"/>
      }

      <h1 className={`w-[320px] font-main-semibold-italic ${props.variant === "primary" ? "text-[2.60em]" : "text-[2.37em]"}`}>
        {props.title}
      </h1>
      <h2 className="text-[1.33em] font-main-light-italic">
        {props.subtitle}
      </h2>
      <p className="w-[266px]">
        {props.description}
      </p>
      <LargeButton text="Inscreva-se" icon={rightIcon}/>
    </div>
  )
}
export default CourseCard;