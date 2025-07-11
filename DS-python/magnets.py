n=int(input())
count=0
prev=None

for _ in range(n):
   m=int(input())

   if(m!=prev):
      count+=1
      prev=m

print(count)
    