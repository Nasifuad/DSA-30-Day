k,n,w=map(int,input().split())

price=0
# w= number of bananas n=the amount money he has k=price of banana

for i in range(1,w+1):
    price+= k*i

if(price<=n):
    print(0)
else:
    print(price-n)