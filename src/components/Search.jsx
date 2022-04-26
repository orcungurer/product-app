import React, { useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import products from "../products.json";

function Search(props) {
    // mapping categories of the data to an array
    const category = products.map((product) => (product.category));
    // removing duplicate categories 
    const uniqueCategory = category.filter((item, index) => (
        category.indexOf(item) === index
    ));

    function toggleProducts() {
        props.setShowProducts(!props.showProducts);
    }

    // handling search bar filter
    const [searchText, setSearchText] = useState("");

    function handleChange(event) {
        // setting input value as searchText
        const newValue = event.target.value;
        setSearchText(newValue);
        // showing products since filter changed.
        props.setShowProducts(true);
        // setting filtered products as filteredData
        props.setFilteredData(products.filter(item => 
            item.productName.toLowerCase().includes(newValue.trim().toLowerCase()))
        );
    }

    // todo: handling checkbox filter
    const [categories, setCategories] = useState({});
    // console.log("categories", categories);

    function handleCheckboxChange(category, index) {
        // const {name, value} = event.target;
        console.log("current index", index);
        console.log("current category", category);
        // setCategories((prevValue) => {
        //     console.log("prevValues", prevValue);
        //     return {
        //         ...prevValue,
        //         [name]: true
        //     };
        // });
    }

    return (
        <div className="search-section">
            <p className="search-title">I'm looking for...</p>
            <hr></hr>

            <div className="categories">
                {
                    uniqueCategory.map((category, index) => (
                        <div key={index} className="category-item">
                            <input 
                                type="checkbox" 
                                onChange={() => handleCheckboxChange(category, index)} 
                                id={category.toLowerCase().replace(" ", "-")} 
                                name={category.toLowerCase().replace(" ", "-")} 
                                checked={category.checked}
                            />
                            <label htmlFor={category.toLowerCase().replace(" ", "-")}>{category}</label>
                        </div>
                    ))
                }
                <div className="category-item">
                    <Button variant="info" onClick={toggleProducts}>{props.showProducts ? "Hide Products" : "Show Products"}</Button>
                </div>
            </div>
            
            <div className="search-bar">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon className='fa-icons' icon={faMagnifyingGlass} />
                    </InputGroup.Text>
                    <FormControl
                        onChange={handleChange}
                        name="searchText"
                        value={searchText}
                        placeholder="Type here..."
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
        </div>
    );
}

export default Search;