from flask import Flask, request, jsonify
from flask_cors import CORS
import json


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'




def dataIsClean(json):
    for meso in json:
        if not meso.get('mesoLength', '').isdigit():
            return False
        if len(meso.get('mesoLength', '')) == 0 or len(meso.get('mesoNotes', '')) == 0 or len(meso.get('mesoName', '')) == 0:
            return False
    return True


@app.route('/submit', methods=['POST'])
def receive_data():
    data = request.json  
    temp=True
    if isinstance(data, dict):
        data = [data]
    if dataIsClean(data):
        print("Received data:", data) 
        writingData=json.dumps(data)
        file=open("mesocycleData.json","a")
        file.write(writingData)
        file.close()
    else:
        return "Dirty Data",400

    return "Successfully received data",200



if __name__ == "__main__":
    app.run(debug=True)