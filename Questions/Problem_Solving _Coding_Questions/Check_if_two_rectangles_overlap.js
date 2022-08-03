/*
1. The left edge of A is to the right of the right edge of B. In this case, 
the first rectangle A is completely on the right side of second rectangle B as shown in the following diagram

2. right edge of A is to the left of the left edge of B. In this case, 
the first rectangle A is completely on the left side of second rectangle B, as shown below

3. Top edge of A is below the bottom edge of B. In this case, 
the first rectangle A is completely under second rectangle B as shown in the following diagram

4. Bottom edge of A is above the top edge of B. 
In this case, the first rectangle A is completely above second rectangle B as shown in the following diagram

Read more: https://javarevisited.blogspot.com/2016/10/how-to-check-if-two-rectangle-overlap-in-java-algorithm.html#ixzz7atMEMe1U

*/



/*
public class Main { public static void main(String[] args) { 
    Point l1 = new Point(0, 10); 
    Point r1 = new Point(10, 0); 
    Point l2 = new Point(5, 5); 
    Point r2 = new Point(15, 0); 
    
    Rectangle first = new Rectangle(l1, r1); 
    Rectangle second = new Rectangle(l2, r2); 
    
    if (first.isOverLapping(second)) { 
        System.out .println("Yes, two rectangles are intersecting with each other"); }
    else { 
        System.out .println("No, two rectangles are not overlapping with each other"); } } 
} 

class Point {
    int x;
    int y; 

    public Point(int x, int y) {
        super(); 
        this.x = x; 
        this.y = y; 
    } 
} 

class Rectangle {
    private final Point topLeft; 
    private final Point bottomRight; 
    public Rectangle(Point topLeft, Point bottomRight) {
        this.topLeft = topLeft; 
        this.bottomRight = bottomRight; 
    }
    public boolean isOverLapping(Rectangle other) {
        if (this.topLeft.x > other.bottomRight.x
            || this.bottomRight.x < other.topLeft.x
            || this.topLeft.y < other.bottomRight.y 
            || this.bottomRight.y > other.topLeft.y) {
            return false;
        } 
            return true; 
        } 
    }

Read more: https://javarevisited.blogspot.com/2016/10/how-to-check-if-two-rectangle-overlap-in-java-algorithm.html#ixzz7atMmWtAT



*/
