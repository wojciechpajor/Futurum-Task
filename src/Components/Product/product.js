import './productStyle.css';
import Campaign from "../Campaign/campaign";
import firebase from '../../firebase';
import React, { useEffect, useState } from "react";
import AddCampaign from "../Campaign/addCampaign";





const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('Products').onSnapshot(snapshot => (
            setProducts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    console.log(products[0]);

    return(
        <div>
            {products.map(product => (
            <div className="productStyle">
                <div>
                    <ul>{product.name}</ul>
                    <button>Remove Product</button>
                </div>

                <Campaign props={product}></Campaign>
                <AddCampaign/>
            </div>
            ))
            }


            <button>Add Product</button>
        </div>
    )
};

export default Product;