    n,k=map(int,input().split())

    time=240-k
    timeForSolving=0
    solveCount=0
    for i in range(1,n+1):
        timeForSolving+=5*i

        if(time>=timeForSolving):
            solveCount+=1;
        
    print(solveCount)

    # 3 222
    #time= 240-222 = 18 
    # time for solve ith=0th= 0 min 1st=5 min --- 18 >=5 yes 10