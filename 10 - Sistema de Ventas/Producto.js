class Producto {
    static contadorProducto = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    get precio(){
        return this._precio;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return `
            ID: ${this._idProducto} 
                Producto: ${this._nombre} 
                Precio: ${this._precio}
                `;
    }
}

// Union de agregacion con la clase Orden y Producto
class Orden {
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
            this._idOrden = ++Orden.contadorOrden;
            this._productos = [];
            this._productosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;        
    }
    agregarProductos(producto){
        // Condicional para no exceder el maximo de productos.
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            // Agregamps un nuevo elemento con el metodo push
            this._productos.push(producto);
            // Luego de agregarse el producto se aumenta el contador.
            this._productosAgregados++;
        }
        else {
            console.log(`Lo siento, maximo puede agregar ${Orden.MAX_PRODUCTOS} produtos.`);
        }
    }
    calculaTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        // Iteramos la lista this._productos
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`
            Orden: ${this._idOrden}
            Producto Agregados: ${this._productosAgregados}
                ${productosOrden}  
            Total: $${this.calculaTotal()}`
                );
    }
}

let producto1 = new Producto("Leche", 10);
let producto2 = new Producto("Huevos", 20);
let producto3 = new Producto("Pan", 30);
let producto4 = new Producto("Arroz", 40);
let producto5 = new Producto("Aceite", 50);
let producto6 = new Producto("Jabon", 60);


let orden1 = new Orden();
orden1.agregarProductos(producto1);
orden1.agregarProductos(producto2);
orden1.agregarProductos(producto3);
orden1.agregarProductos(producto4); 
orden1.agregarProductos(producto5);
orden1.agregarProductos(producto6);
orden1.mostrarOrden();
orden1.calculaTotal();