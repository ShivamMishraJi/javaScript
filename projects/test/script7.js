/*let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let billamount = document.getElementById('Bill Amount').value;
    alert(billamount);
    
    let tipperc = document.getElementById('tip perc').value;
    let tipamount = billamount * ( tipperc / 100);
    let total = billamount + number (tipamount);
   

    document.getElementById('tip Amount').value = tipamount;
    document.getElementById('total billed').value = total;
  

})*/

const tipcalcy = () => {
    let amount = document.getElementById('billAmount').value;
    
    let perc = document.getElementById('tipperc').value;

    let tip = amount * (perc/100);
    

    let total = tip + Number(amount);
    alert(total);

    document.getElementById('tiptotal').value = tip;
    document.getElementById('totalbilled').value = total;
}


    
   