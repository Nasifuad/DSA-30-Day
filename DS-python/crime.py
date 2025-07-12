n=int(input())  

inc=list(map(int,input().split()))

officer=0
crime=0

for i in range(n):
    if(inc[i]>0):
        officer+=inc[i]
    else:
        if(officer==0):
            crime+=1
        else:
            officer-=1

print(crime)