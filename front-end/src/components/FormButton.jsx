function FormButton(props) {
  return(
    <button type="submit" className="flex justify-center sm:justify-start w-full items-center bg-salmon-200 text-base-100 px-[52px] py-[34px] rounded-[10px] text-[1.33em] leading-[1.25em] font-main-semibold drop-shadow-form">
      {props.text}
    </button>
  )
}

export default FormButton;