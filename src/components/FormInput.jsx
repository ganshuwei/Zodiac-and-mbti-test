import "./formInput.css"



const FormInput=(props)=>{
    const{label,onChange,id,...inputProps}=props;
    return(
        <div className="formInput">
            <label>Please Select Your Birthday</label>
            <input{...inputProps} onChange={onChange}/>           
        </div>
    )
};

export default FormInput;