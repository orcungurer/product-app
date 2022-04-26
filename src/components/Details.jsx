import React from "react";
import { Button } from "react-bootstrap";

function Details(props) {
    // console.log("Details Props: ", props);
    
    return (
        <div className="details-section">
            <p className="product-title">Product Details</p>
            <hr></hr>
            <div className="product-details">
                <p className="product-name">{props.productName}</p>
                <div className="product-tag">
                    {
                        props.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))
                    }
                </div>
                <Button variant="info" href={props.manufacturerUrl}>Go to Manufacturer</Button>
                <div className="product-description">
                    {
                        props.description.map((desc, index) => (
                            <p key={index} className="description">{desc}</p>
                        ))
                    }
                </div>
                {
                    props.option1 || props.option2 ?
                    <div className="product-option">
                        <input type="radio" id="option1" name="option" value="Option 1" />
                        <label htmlFor="option1">Option 1</label>
                        <div>
                            <p className="option-description">{props.option1}</p>
                        </div>
                        <input type="radio" id="option2" name="option" value="Option 2" />
                        <label htmlFor="option2">Option 2</label>
                        <div>
                            <p className="option-description">{props.option2}</p>
                        </div>
                    </div>
                    : ""
                }
                
            </div>
        </div>
    );
}

export default Details;