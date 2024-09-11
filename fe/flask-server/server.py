from flask import Flask, request, jsonify
from flask_cors import CORS
import json


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/submit', methods=['POST'])
def receive_data():
    data = request.json  
    temp=True
    if temp or self.dataIsClean():
        print("Received data:", data) 
        writingData=json.dumps(data)
        file=open("mesocycleData.json","a")
        file.write(writingData)
        file.close()
    else:
        return "Dirty Data"

    return "Successfully received data"
# def dataIsClean(json):
#     for meso in json:
#         if meso



if __name__ == "__main__":
    app.run(debug=True)