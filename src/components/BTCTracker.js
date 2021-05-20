import React from 'react';
import $ from 'jquery';
var numeral = require('numeral');
export default class BTCTracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0.00,
      lastFetch: ""
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    var context = this;
    window.setInterval(() => {
      $.ajax({
        url: "https://api.cryptonator.com/api/ticker/btc-usd",
        dataType: "json",
        method: "GET",
        success: function(response) {
          console.log('response: ', response);
          context.setState({
            price:response.ticker.price
          });
        }
      });
    }, 1000);
  }

  render() {
    return (
      <div className='price' >
        <h1>
          BTC Price: {numeral(this.state.price).format('0,0 $')}
        </h1>
      </div>
    );
  }
}