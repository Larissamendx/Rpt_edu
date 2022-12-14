function ContentList(props) {
  return(
    <ul>
      <span className="text-[1.33em] w-[290px] leading-[1.25em] font-main-semibold-italic block">{props.title}</span>
      {props.items.map((item) => <li key={item.toString()} className="ml-[10px]">∙ {item}</li>)}
    </ul>
  )
}
export default ContentList;