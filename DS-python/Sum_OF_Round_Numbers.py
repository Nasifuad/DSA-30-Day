n = int(input())

for _ in range(n):
    t = input()
    length = len(t)
    result = []
    for i in range(length):
        if t[i] != '0':
            result.append(t[i] + '0' * (length - i - 1))
    print(len(result))
    print(' '.join(result))
