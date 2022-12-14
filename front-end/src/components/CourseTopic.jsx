function CourseTopic(props) {
  return(
    <div className="flex items-start gap-[10px]">
      <img src={props.icon} />
      <div className="mt-[4px]">
        <strong className="text-[1.78em] leading-[1.25em] font-main-bold">{props.title}</strong>
        <p>{props.subtitle}</p>
      </div>
    </div>
  )
}
export default CourseTopic;