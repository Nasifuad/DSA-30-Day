shoe=list(map(int, input().split()))
unique=0
tempArr=[]
for i in range(len(shoe)):
     if(shoe[i] in tempArr):
          continue
     for j in range(i+1,len(shoe)):
          if(shoe[i]==shoe[j]):
               tempArr.append(shoe[i])
               unique+=1

print(unique)