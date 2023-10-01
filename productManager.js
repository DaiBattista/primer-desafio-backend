class ProductManager {
    constructor() {
        this.products = [];
        this.stock = 25;
    }
    addProduct(title, description, price, thumbnail, code) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            id: this.products.length + 1,
        };

        console.log("Agregando producto:", product);    
        this.products.push(product);
        return product;
    }

    getProducts() {
        const products = this.products;
        console.log("Lista de productos:");
        return products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            console.log("El producto no existe");
            return null;
        }

        console.log("Producto encontrado:", product);
        return product;
    }
}

const productManager = new ProductManager();

const product = productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123");

console.log(productManager.getProducts());

const productById = productManager.getProductById(product.id);
// IMPORTANTE: Para probar si el producto que se agrega no existe, hay que comentar la función de arriba y descomentar la de abajo =)
//const productById = productManager.getProductById(99999);