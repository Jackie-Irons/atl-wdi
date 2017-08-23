According to Metz, what is Object-oriented design about?
Manage dependency

What does SOLID stand for?
Single Responsibility, Open-closed, Liskov substition, interface segregation, dependency inversion


Ruby is a class-based object-oriented language. What does that mean?
having data types and having the methods built into syntax


Where are methods defined in Ruby?
within the class


Why does single Responsibility matter?
affects the ability to reuse classes


What does attr_reader do?
creates wrapper methods for varibles present in a class that can be used as ref in other methods


What are 4 benefits Metz outlines for methods that have a single responsibility?
expose previouly hidden qualities, avoide the need for comments, encourage reuse, easy to move to another class


What are 4 things an object knows when it has a dependency?
name of another class, name of a message that it intends to send to someone other than itself, arguments that a message req


Dependency management is core to creating future-proof applications. What does injecting dependencies and isolating dependencies do? What are their benefits?
injecting dependenciesis heavily reliant on not creating dependencies by hard coding a ref to a higher class 
you pass in the new class as an argument in order to inject a dependency. This allows you to retain the functionality of the class without having to rely on that explicit dependency.  
In isolating dependencies, you try to seperate those classes that are going to have heavily reliant dependencies.  Through this, the flow of your classes is not effected due to these isolated dependencies.
