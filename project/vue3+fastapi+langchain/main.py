from fastapi import FastAPI #导入库
app=FastAPI() #创建对象app

#服务器定义URL的时候，用了什么method，那么客户端在请求这个URL的时候就要用相同的method。

@app.get("/") #如果有人用get方法访问根目录，就会调用root函数
async def root(): #async表示异步函数，root是函数名，在等待某些耗时操作时，可以"让出"控制权去做别的事，而不是干等着。
    #await 访问数据库()
    return {"message": "Hello World"}

@app.get("/hello/{name}") #如果有人用get方法访问/hello/{name}，就会调用hello函数
async def hello(name: str): #
    # await 访问数据库()
    return {"message": f"Hello {name}"}

#GET请求：在服务器上获取资源；POST请求，提交数据到服务器；PUT请求，更新服务器上的资源；DELETE请求，删除服务器上的资源。