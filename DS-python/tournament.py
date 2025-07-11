def solve_tournament():
    # Read input for each test case
    n, j, k = map(int, input().split())
    a = list(map(int, input().split()))
    
    # Convert j to 0-based indexing
    j -= 1
    
    # Count players with strength strictly greater than a[j]
    stronger = sum(1 for x in a if x > a[j])
    
    # If there are at most n-k players stronger than j, j can survive
    if stronger <= n - k:
        return "YES"
    return "NO"

# Read number of test cases
t = int(input())

# Process each test case
for _ in range(t):
    print(solve_tournament())