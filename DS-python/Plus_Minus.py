n=int(input())
data=[]

for _ in range(n):
    row=list(map(int,input().split()))
    data.append(row)
res=[]

for i in range(n):
    if(data[i][0]+data[i][1]==data[i][2]):
        print("+")
    else:
        print("-")
