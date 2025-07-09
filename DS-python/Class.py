class Dog:
    def __init__ (self,val):
        self.val=val
    
    def greet(self):
        print("Hello",self.val)

p1=Dog("Raindeeer")
p1.greet()