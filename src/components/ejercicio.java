import java.util.ArrayList;

class Producto {
    private String nombre;
    private double precio;

    public Producto(String nombre, double precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    public double getPrecio() { return precio; }
    public String getNombre() { return nombre; }
}

class Factura {
    private ArrayList<Producto> productos = new ArrayList<>();
    
    public void agregarProducto(Producto p) { productos.add(p); }
    
    public double calcularTotal() {
        return productos.stream().mapToDouble(Producto::getPrecio).sum();
    }
}

public class Main {
    public static void main(String[] args) {
        Producto p = new Producto("Manzana", 1500);
        Factura f = new Factura();
        f.agregarProducto(p);
        System.out.println("Total Factura: $" + f.calcularTotal());
    }
}