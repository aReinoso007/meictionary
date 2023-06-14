import React from "react";

const SearchBar: React.FC = () => {
    let state = {term: ''};

    onsubmit = (event)=>{
        event.preventDefault();
        
    }

    return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                    <input 
                        type="text" 
                        value={state.term}
                        onChange={(e) => state.term = e.target.value}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;