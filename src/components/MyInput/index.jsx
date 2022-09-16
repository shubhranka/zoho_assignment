import "./index.css";
const MyInput = ({
    id,
    placeholder,
    type,
    regex,
    disabled,
    value,
    setValue,
    err
}) => {
    let style = {}
    if(err && err.length > 0){
        style = {
            outline:"1px solid red"
        }
    }
    return (
        <div className="myInput">
            <input
                type={type ? type : "text"}
                placeholder={placeholder}
                id={id}
                required
                pattern={regex ? regex : null}
                disabled={disabled ? disabled : false}
                value={value ? value : ""}
                onChange={(e) => setValue(e.target.value)}
                style={style}
            />
            {err && err.length > 0 && <span className="small-error">{err}</span>}
        </div>
    );
};

export default MyInput;
