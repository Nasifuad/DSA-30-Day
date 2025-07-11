import sys
import threading

def main():
    import math
    import sys
    sys.setrecursionlimit(1 << 25)

    n = int(sys.stdin.readline())
    a = list(map(float, sys.stdin.readline().split()))

    def is_power_of_two(x):
        return x & (x - 1) == 0

    def find_k(n):
        for k in range(1, n + 1):
            if (n - k // 2) > 0 and is_power_of_two(n - k // 2):
                return k
        return -1

    k = find_k(n)

    players = list(range(n))

    prob = [0.0 for _ in range(n)]

    def simulate(p):
        if len(p) == 1:
            res = [0.0] * n
            res[p[0]] = 1.0
            return res

        mid = len(p) // 2
        left = p[:mid]
        right = p[mid:]

        prob_left = simulate(left)
        prob_right = simulate(right)

        new_prob = [0.0] * n
        for i in left:
            for j in right:
                pi_win = a[i] / (a[i] + a[j])
                new_prob[i] += prob_left[i] * prob_right[j] * pi_win
                new_prob[j] += prob_right[j] * prob_left[i] * (1 - pi_win)

        return new_prob

    # First round only players 0 to k-1
    first_round_players = list(range(k))
    first_probs = simulate(first_round_players)

    # Remaining players go to next round directly
    remaining_players = list(range(k, n))

    # Merge winners of first round with remaining players
    next_round_players = []
    for i in range(n):
        if i < k:
            if first_probs[i] > 0:
                next_round_players.append(i)
        else:
            next_round_players.append(i)

    # Initial probabilities for all players
    init_probs = [0.0] * n
    for i in range(n):
        if i < k:
            init_probs[i] = first_probs[i]
        elif i >= k:
            init_probs[i] = 1.0

    def simulate_from_probs(p, init):
        if len(p) == 1:
            res = [0.0] * n
            res[p[0]] = init[p[0]]
            return res

        mid = len(p) // 2
        left = p[:mid]
        right = p[mid:]

        prob_left = simulate_from_probs(left, init)
        prob_right = simulate_from_probs(right, init)

        new_prob = [0.0] * n
        for i in left:
            for j in right:
                pi_win = a[i] / (a[i] + a[j])
                new_prob[i] += prob_left[i] * prob_right[j] * pi_win
                new_prob[j] += prob_right[j] * prob_left[i] * (1 - pi_win)

        return new_prob

    result = simulate_from_probs(next_round_players, init_probs)

    print(" ".join(f"{x:.12f}" for x in result))

threading.Thread(target=main).start()
