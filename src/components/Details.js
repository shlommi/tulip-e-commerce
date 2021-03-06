import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-12 mx-auto text-center text-blue my-3">
                  <h3>{title}</h3>
                </div>
              </div>
              {/* end of title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="imgDetail" />
                </div>
                <div className="col-12 mx-auto col-md-6 my-3">
                  <h4 className="text-blue">
                    <strong>
                      מחיר: <span>₪</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-3">מידע על המוצר:</p>
                  <p className="text-muted lead">{info}</p>
                  {/*   buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>חזרה למוצרים</ButtonContainer>
                    </Link>
                    <Link to="/details">
                      <ButtonContainer
                        onClick={() => {
                          value.addToCart(id);
                          // value.openModal(id);
                        }}
                        disabled={inCart ? true : false}
                        cart
                      >
                        {inCart
                          ? "המוצר קיים בעגלת קניות"
                          : "הוסף מוצר לעגלת קניות"}
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer>לקופה</ButtonContainer>
                    </Link>
                  </div>
                  {/* end of buttons */}
                </div>
              </div>
              {/* end of product info */}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
