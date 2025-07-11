from collections import Counter

g = input()        # SANTACLAUS
r = input()        # DEDMOROZ
p = input()        # SANTAMOROZDEDCLAUS

combined = g + r

if len(p) != len(combined):
    print("NO")
else:
    if Counter(p) == Counter(combined):
        print("YES")
    else:
        print("NO")
