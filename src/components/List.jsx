import React, {useState, useEffect} from "react";
import products from "../products.json";
import Search from "./Search";
import ListItem from "./ListItem";

function List(props) {
    const [isSelected, setSelected] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [filteredData, setFilteredData] = useState(products);

    function selectedListItem(id) {
        setSelected(id);
        props.setShowDetails(true);
        props.setProduct(products[id]);
    }

    // hiding details when products are hidden
    useEffect(() => {
        if(!showProducts){
            props.setShowDetails(false);
            setSelected(false);
        }
    }, [showProducts]);

    // console.log("filteredData", filteredData);

    return (
        <div>
            <Search showProducts={showProducts} setShowProducts={setShowProducts} filteredData={filteredData} setFilteredData={setFilteredData} />
            {
                showProducts &&
                    <div id="list-section" className="list-section">
                        {filteredData.map((product, index) => (
                            <ListItem 
                                key={index} id={index} 
                                onSelect={selectedListItem} selectStatus={isSelected} 
                                productName={product.productName} productCategory={product.category} productTags={product.tags} 
                            />
                        ))}
                    </div>
            }
        </div>
    );
}

export default List;