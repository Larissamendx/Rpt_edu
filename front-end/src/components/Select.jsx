function Select(props) {
    return(
        <div>
            <label className="flex flex-col">
                <select 
                    className="w-[380px] h-[40px] px-5 border border-violet-200 rounded-[10px] outline-primary-100 font-main-italic text-primary-100
                    placeholder:text-primary-100 placeholder:opacity-30 hover:border-primary-100 box-border" 
                    type={props.type}
                    placeholder={props.placeholder}
                    {...props}
                >
                    {props.options.map((value, index) => {
                        return <option value={value.name} key={index}>{value.name}</option>
                    })}
                </select>
            </label> 
        </div>
    )
}

export default Select;