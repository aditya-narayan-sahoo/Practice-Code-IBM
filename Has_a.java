class Engine {
    private int cylinders;
    
    public Engine(int numCylinders) {
        cylinders = numCylinders;
    }
    
    public void startEngine() {
        System.out.println("The engine with " + cylinders + " cylinders starts up.");
    }
}

class Car {
    private String make;
    private Engine engine;
    
    public Car(String carMake, int numCylinders) {
        make = carMake;
        engine = new Engine(numCylinders);
    }
    
    public void driveCar() {
        System.out.print(make + " car drives... ");
        engine.startEngine();
    }
}

public class Has_a {
    public static void main(String[] args) {
        // Create a Car object with a 4-cylinder engine
        Car myCar = new Car("Mahindra", 4);
        
        // Drive the car (which will start its engine)
        myCar.driveCar();
    }
}