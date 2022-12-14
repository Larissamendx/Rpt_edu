import { Link } from "react-router-dom";
import rightArrow from "../assets/arrow-right-large.svg";
import griBackground from "../assets/gri-background.svg";
import vrfBackground from "../assets/vrf-background-orange.svg";

function LargeButtonCard(props) {
  return(
    <Link to={props.link} className="z-20 w-auto">
      <div className={`flex w-full gap-10 justify-between items-center px-8 md:gap-0 md:w-[580px] md:pl-[100px] md:pr-[50px] 
      py-[52px] rounded-[40px] text-base-100 font-main-bold-italic drop-shadow-primary overflow-hidden 
        ${props.variant === "primary" ? "bg-primary-300" : "bg-primary-200"}`
      }>

        {props.variant === "primary" ? 
          <img src={vrfBackground} className="absolute left-0 top-[-78px] w-[200px]"/> : 
          <img src={griBackground} className="absolute left-[-20px] top-[-90px] w-[254px]"/>
        }

        <span className="sm:w-[370px] max-w-[380px] text-[1.33em] sm:text-[1.78em] leading-[1.25em] block">
          {props.title}
        </span>
        <img src={rightArrow}  className="h-10 lg:h-auto"/>
      </div>
    </Link>
  )
}

export default LargeButtonCard;