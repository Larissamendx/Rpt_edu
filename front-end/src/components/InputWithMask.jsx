import InputMask from 'react-input-mask';

function InputWithMask(props) {
    return(
        <div className="w-full md:w-auto">
            <label className="flex flex-col-reverse">
                <InputMask 
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
            </label> 
        </div>
    )
}

export default InputWithMask;