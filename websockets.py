import asyncio
import datetime
import random
import websockets
import mysql.connector,json

async def time(websocket, path):
    while True:
        connector=mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="pricelist"
        )
        pricelist=connector.cursor(dictionary=True)
        pricelist.execute("select * from price")
       
        result = pricelist.fetchall()

        await websocket.send(json.dumps(result))
        connector.close()
        await asyncio.sleep(random.random() * 3)

start_server = websockets.serve(time, 'localhost', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()