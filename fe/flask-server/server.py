from flask import Flask, request, jsonify
from flask_cors import CORS
import json


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/submit', methods=['POST'])
def receive_data():
    data = request.json  
    print("Received data:", data) 
    writingData=json.dumps(data)
    file=open("mesocycleData.json","a")
    file.write(writingData)
    file.close()

    return jsonify({"message": "Data received successfully", "received": data}), 200

if __name__ == "__main__":
    app.run(debug=True)