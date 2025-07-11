n=int(input())

for _ in range(n):
    t=list(map(int,input().split()))

    if(t[0]+t[1]==t[2] or t[0]+t[2]==t[1] or t[1]+t[2]==t[0] ):
        print("YES")
    else:
        print("NO")