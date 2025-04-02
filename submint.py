from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient("mongodb://localhost:27017/")
db = client.todo_db
collection = db.todo_items

@app.route('/submittodoitem', methods=['POST'])
def submit_todo():
    data = request.json
    collection.insert_one({
        "itemName": data["itemName"],
        "itemDescription": data["itemDescription"]
    })
    return {"message": "Item added successfully"}, 201

if __name__ == "__main__":
    app.run(debug=True)

