// Engine class
class Engine {
    private String type;

    public Engine(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }
}

// Car class
class Car {
    private Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void start() {
        System.out.println("The " + engine.getType() + " engine is starting.");
    }
}

// Main class
class Main {
    public static void main(String[] args) {
        Engine engine = new Engine("V8");
        Car car = new Car(engine);
        car.start();
    }
}
