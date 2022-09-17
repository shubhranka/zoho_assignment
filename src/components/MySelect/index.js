import "./index.css"
const MySelect = ({ options, filters, setFilters }) => {
    return (
        <div className="my-select">
            {options.map((option, index) => (
                <div
                    className= {filters.includes(option) ? "my-select__option selected" : "my-select__option"}
                    key={index}
                    onClick={() => setFilters(option)}
                >
                    {option}
                </div>
            ))}
        </div>
    );
};

export default MySelect;
