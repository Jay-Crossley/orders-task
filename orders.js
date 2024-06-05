fetch('https://fauxdata.codelayer.io/api/orders').then(response => {
  return response.json();
}).then(data => {
    let total = 0;
    data.orders.forEach( element => {
        element.items.forEach( item => {
            total += parseFloat(item.price);
        });
    });
    console.log(('The average order value is £'+ (total/data.orders.length).toFixed(0)));
}).catch(err => {
    console.log('The API has sent a 500 error'); 
});
