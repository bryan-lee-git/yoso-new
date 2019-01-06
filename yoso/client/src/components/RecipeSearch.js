import React from "react";
import { Row, Input } from "react-materialize";


const RecipeSearch = (props) => {

    return (
        <form>
            <Row>
                <Input s={12} onChange={props.handleInputChange} label="Search Recipes" type="text" name="query" />
                <br />
                <button
                    onClick={props.handleFormSubmit}
                    className="btn btn-primary"
                >
                    Search
            </button>
            </Row>
        </form>
    )
};

export default RecipeSearch;