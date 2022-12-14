import groupLogo from "../assets/grupo-report-logo.svg";

function WaterMark(props) {
  return(
    <div className="flex justify-center fixed h-full w-full sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-10 lg:py-10 xl:px-20 xl:py-20">
      <div className="bg-lines w-full h-full bg-[length:100%_100%] z-10"/>
      {props.hideLogo || <img src={groupLogo} alt="grupo report logo" height={20} className="absolute bottom-8 z-10"/>}
    </div>
  )
}

export default WaterMark;