n=int(input())

count=0;

bill=[100,20,10,5,1]


for b in bill:
    count+=n//b
    n%=b


print(count)