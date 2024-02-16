class Vehicle {
    public void move() {
        System.out.println("The vehicle is moving.");
    }
}

class Car extends Vehicle {
    public void honkHorn() {
        System.out.println("Beep beep!");
    }
}

public class Is_a {
    public static void main(String[] args) {
        // Create an object of the Car class
        Car car = new Car();
        
        // Call methods on the Car object
        car.move();  // This works because a Car "is-a" Vehicle
        car.honkHorn();  // This works because it's a method defined specifically for Cars
    }
}