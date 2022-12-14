import arrowRight from "../assets/arrow-right-medium-orange.svg"

function SubscribeButton() {
    return(
      <a href="#formulario-de-inscricao">
        <div className="flex w-[198px] text-salmon-200 text-[1.33em] leading-[1.25em] font-main-light">
          <span>clique aqui para<span className="font-main-semibold-italic"> se inscrever</span></span>
          <img src={arrowRight} />
        </div>
      </a>
    )
}

export default SubscribeButton;