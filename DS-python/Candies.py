t=int(input())

for _ in range(t):
    candy=int(input())
    if(candy<=2):
        print(0)
    elif(candy%2==0):
        print(candy//2-1)
    else:
        print(candy//2)