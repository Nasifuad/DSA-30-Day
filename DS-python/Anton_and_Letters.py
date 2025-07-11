s = input()

letters = s.strip('{}').replace(',', ' ').split()

unique_letters = set(letters)

print(len(unique_letters))
