function SubmitButton(props) {
  return(
    <button {...props} type="submit" className="flex w-full justify-center sm:justify-start sm:w-max items-center bg-salmon-200 text-base-100 rounded-full font-main-semibold-italic px-4 py-2">
      {props.text}
    </button>
  )
}

export default SubmitButton;