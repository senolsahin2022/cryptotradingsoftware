import threading
import mysql.connector,json
import urllib.request

#connector.close()
def setInterval(func,time):
    e = threading.Event()
    while not e.wait(time):
        func()

def foo():
    connector=mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="pricelist"
    )
    pricelist=connector.cursor(dictionary=True)
    pricelist.execute("select * from price")
    result_set = pricelist.fetchall()
    for i in result_set:
        print(i["symbol"])
        symbol = urllib.request.urlopen("http://localhost:8000/binance/1?param="+i["symbol"]+"").read()
        #updown = urllib.request.urlopen("http://localhost:8000/binanceChange/2?param="+i["symbol"]+"").read()
    connector.close()
# using
setInterval(foo,5)