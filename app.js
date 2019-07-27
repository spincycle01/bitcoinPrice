const btnUS = document.querySelector('#btnUS');
const priceSpan = document.querySelector('#price');
const USD = document.querySelector('#USD');
const EUR = document.querySelector('#EUR');
const GBP = document.querySelector('#GBP');

btnUS.addEventListener('click', () => {
  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = () => {
    if ((XHR.readyState == 4) & (XHR.status == 200)) {
      let price = JSON.parse(XHR.responseText).bpi;
      if (EUR.checked) {
        price = price['EUR']['rate'];
        priceSpan.innerHTML = `EUR ${price}`;
        priceSpan.style.display = 'block';
      } else if (GBP.checked) {
        price = price['GBP']['rate'];
        priceSpan.innerHTML = `GBP ${price}`;
        priceSpan.style.display = 'block';
      } else {
        price = price['USD']['rate'];
        priceSpan.innerHTML = `USD ${price}`;
        priceSpan.style.display = 'block';
      }
    }
  };

  XHR.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
  XHR.send();
});
