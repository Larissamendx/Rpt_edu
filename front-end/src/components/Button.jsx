function Button(props) {
    return(
      <button className="flex w-max items-center bg-salmon-200 text-base-100 rounded-full font-main-semibold-italic px-4 py-2 gap-[42px]">
          {props.text}
          {props.icon && <img src={props.icon} />}
        </button>
    )
}

export default Button;