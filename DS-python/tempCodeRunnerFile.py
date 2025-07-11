import math
t=int(input())

for _ in range(t):
    candy=int(input())
    if(candy<=2):
        print(0)
        continue
    if(candy%2==0):
        print(math.floor(candy/2-1))
        continue
    print(math.floor(candy/2))