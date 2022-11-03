let productos = [];
let total = 0;

function add(product, price){
    console.log(product, price);
    productos.push("- "+product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Total a Pagar = $${total}`;
}

function pay(){
    alert(
        "JASAI LIVE"+"\n\n"+
        "DESCRIPCION:"+"\n"+
        productos.join("\n")+"\n\n"+
        `TOTAL = $${total}`
        );
}