const productos = [
    { nombre: "caramelo", precio: 30 },
    { nombre: "galleta", precio: 50 },
    { nombre: "cerveza", precio: 150 },
    { nombre: "queso", precio: 100 },
    { nombre: "vino", precio: 200 },
];
let carrito = []

let seleccion = prompt("¿Hola desea comprar algún producto?")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt("¿Hola desea comprar algún producto?")
}

if (seleccion == "si") {
    alert("A continuación nuestra lista de productos")
    let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$");
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no") {
    alert("Bueno gracias por su visita, vuelva pronto")
}

while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if (producto == "harina" || producto == "galleta" || producto == "cerveza" || producto == "queso" || producto == "vino") {
        switch (producto) {
            case "harina":
                precio = 30;
                break;
            case "galleta":
                precio = 50;
                break;
            case "cerveza":
                precio = 150;
                break;
            case "queso":
                precio = 100;
                break;
            case "vino":
                precio = 200;
                break;
        }
        let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

        carrito.push({ producto, unidades, precio })
        console.log(carrito)
    } else {
        alert("Lamentablemente no tenemos ese producto.")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while (seleccion === "no") {
        alert("Gracias por su compra.")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;

    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)