function LargeButton(props) {
  return(
    <a href="#formulario-de-inscricao" className="flex w-full lg:w-max justify-between items-center bg-salmon-200 text-base-100 rounded-full font-main-semibold-italic pl-8 pr-[22px] py-4 lg:gap-[36px] text-[1.33em] leading-[1.25em]">
      {props.text}
      {props.icon && <img src={props.icon} />}
    </a>
)
}

export default LargeButton;