import React from "react";
import "./Debitcard.css";
import Chip from "./images/chip.png";
import visa from "./images/visa.png";
import Pattern from "./images/pattern.png";

function DebitCard() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-inner">
            <div className="front">
              <div className="row">
                <img src={Chip} alt="chip" width="60px" className="Chip" />
                <img src={visa} alt="visa" width="80px" />
              </div>
              <div className="row card-number">
                <p>4567</p>
                <p>0123</p>
                <p>4567</p>
                <p>8901</p>
              </div>
              <div className="row card-holder">
                <p>CARD HOLDER</p>
                <p>VALID TILL</p>
              </div>
              <div className="row card-name">
                <p>VIJAY</p>
                <p>08/2030</p>
              </div>
              <div className="card-info">
                <p>VISA DEBIT CARD</p>
              </div>
            </div>

            <div className="back">
              <div className="bar"> </div>
              <div className="row card-cvv">
                <div>
                  <img src={Pattern} alt="Pattern" />
                </div>
                <p>777</p>
              </div>
              <div className="row card-text">
                <p>
                  Use of this card is subject to the term and conditions. Not
                  valid for payments in Foreign Exchange in Nepal and Bhutan.{" "}
                </p>
              </div>
              <div className="row">
                <p>AUTHORIZED SIGNATURE</p>
                <img src={visa} alt="visa" width="80px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DebitCard;
