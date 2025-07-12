t=int(input())

for _ in range(t):
    prev=''
    seen=set()
    crime=False
    n=int(input())
    s=input()

    for ch in s:
        if(ch!=prev):
            if(ch in seen):
                crime=True
                break

            seen.add(ch)
        prev=ch
    if(crime):
        print("No")
    else:
        print("Yes")

