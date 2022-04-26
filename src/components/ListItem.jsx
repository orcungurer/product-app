import React from "react";

function ListItem(props) {
    // console.log("ListItem Props (Comes from List)", props);

    function handleClick() {
        props.onSelect(props.id);
    }

    return (
        <div className={props.selectStatus === props.id ? "selected list-item" : "list-item"} onClick={handleClick}>
            <p className="product-name">{props.productName}</p>
            <p className="product-category">{props.productCategory}</p>
            <div className="product-tag">
                {props.productTags.map((tag, index) => (
                    <div key={index} className="tag">{tag}</div>
                ))}
            </div>
        </div>
    );
}

export default ListItem;