import json

file = open("D:\Vscode\Tars\json\\test2.json",'r',encoding='utf-8')

str = file.read()

# file.close()

str = json.loads(str)

obj = []

for x in str:
    obj.append(x)

file = open("D:\Vscode\Tars\json\\test.json",'r',encoding='utf-8')

str = file.read()
str = json.loads(str)
for x in str:
    obj.append(x)

print(len(obj))

obj = json.dumps(obj,ensure_ascii=False)


f = open("D:\Vscode\Tars\json\\test2.json",'w',encoding='utf-8')

f.write(obj)

f.close()