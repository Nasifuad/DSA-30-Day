n=int(input())
x=[]
face_num=0
face={
    "Icosahedron":20,
    "Cube":6,
    "Tetrahedron":4,
    "Dodecahedron":12,
    "Octahedron":8
}
for _ in range(n):
    v=input()
    face_num+=face[v]

print(face_num)