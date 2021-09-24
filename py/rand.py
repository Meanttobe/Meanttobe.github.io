import json,requests

file = open('D:\Vscode\Tars\py\\city','r',encoding='utf-8')

test = file.read()

test = test.split(',')

obj = []

url = 'http://api.tianapi.com/txapi/scenic/index?key=62ab76a87d6d9b58e39b169e2e5e9deb&word='


for x in test:
    req = requests.get(url+x)
    req = json.loads(req.text)
    print(req['code'])
    if(req['code'] == 200):
        req = req['newslist']
        for y in req:
            obj.append(y)


print(obj)

obj = json.dumps(obj,ensure_ascii=False)

print(obj)

f = open('D:\Vscode\Tars\json\\copy.json','w',encoding='utf-8')

f.write(obj)

f.close()
