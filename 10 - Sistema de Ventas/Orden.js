// Union de agregacion con la clase Orden y Producto
class Orden {
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
            this._idOrden = Orden.contadorOrden++;
            this._productos = [];
            this._productosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;        
    }
    agregarProductos(producto){
        if (this._productos.length < Orden.MAX_PRODUCTOS){
            // Agregamps un nuevo elemento con el metodo push
            this._productos.push(producto);
            this._productosAgregados++;
        }
        else {
            console.log("No se puede agregar mas productos");
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
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden} - ${productosOrden} - ${this.calculaTotal()}`);
    }
}