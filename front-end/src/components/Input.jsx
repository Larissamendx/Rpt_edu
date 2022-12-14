function Input(props) {
    return(
        <div className="w-full md:w-auto">
            {props.type !== "checkbox" && props.type !== "radio" ? 
            <label className="flex flex-col-reverse">
                <input 
                    className="w-full lg:w-[380px] h-[40px] px-5 border border-violet-200 rounded-[10px] outline-primary-100 
                    font-main-italic text-primary-100 placeholder:text-primary-100 placeholder:opacity-30
                    hover:border-primary-100 box-border disabled:border-violet-200/30 disabled:bg-base-100 disabled:placeholder:text-base-100" 
                    type={props.type}
                    placeholder={props.placeholder}
                    {...props}
                />
                <span className="pl-1 font-main-semibold block">
                    {props.title}
                </span>
            </label> :  
            <label className="flex gap-[10px]">
                <input className="flex-none" type={props.type} name={props.name} {...props}/>
                {props.title}
            </label>
        }
        </div>
    )
}

export default Input;