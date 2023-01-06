import React from "react";
import QuoteCard from "./QuoteCard";
import { useSelector } from "react-redux";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";
function Quotes() {

  const quotes = useSelector((state) => state.quotes)

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/*
              TODO:

              Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
              */}
              
              {
                quotes.map((quote) => {
                  <li>
                    <QuoteCard quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />
                  </li>
                })
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
