# from urllib import request, response
from email.mime import base
from flask import Flask ,request
from io import BytesIO
import cv2
import numpy as np
from PIL import Image
import io
import pandas as pd
import requests
import json
import base64
app = Flask(__name__)

@app.route("/", methods=['POST'])
def hello_world():
    
    
    return 'OK'

@app.route("/predict", methods=['POST'])
def predict():
    
    # image = request.files['image']
    # response = image.read()
    # frame = misc.imread(BytesIO(response))
    # print(frame)
    
    # r = request
    # # convert string of image data to uint8
    # nparr = np.fromstring(r.data, np.uint8)
    # # decode image
    # img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
    
    image_file = request.files['image']
    
    image_bytes = Image.open(io.BytesIO(image_file.read()))
    image = np.array(image_bytes)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    image = cv2.resize(image, (224, 224))
    
    
    localization = request.form['localization']
    age = request.form['age']
    sex = request.form['sex']

    columns =['age', 'sex_female', 'sex_male', 'sex_unknown',
       'localization_abdomen', 'localization_acral', 'localization_back',
       'localization_chest', 'localization_ear', 'localization_face',
       'localization_foot', 'localization_genital', 'localization_hand',
       'localization_lower extremity', 'localization_neck',
       'localization_scalp', 'localization_trunk', 'localization_unknown',
       'localization_upper extremity']
    df = pd.DataFrame(0,index=np.arange(1),columns=columns)
    df['age'] = int(age)
    df['sex'+'_'+sex] = 1
    df['localization'+'_'+localization] =1 
    # retval,buffer = cv2.imencode('.jpg',image)
    headers = {"content-type": "application/json"}
    # image_encoded = base64.b64decode(image)
    # image_string = base64.decodebytes(image_encoded)
    data = json.dumps({"signature_name": "serving_default", "instances": [{"input_1":df.values.tolist()[0] , "input_2":image.tolist()}]})
    
   
    json_response = requests.post('http://model:8501/v1/models/model:predict', data=data, headers=headers)
    
    predictions = json.loads(json_response.text)['predictions'][0]
    
    classes = ['Actinic keratoses', 'Basal cell carcinoma', 'Benign keratosis-like lesions', 'Dermatofibroma', 'Melanoma', 'Melanocytic nevi', 'Vascular lesions']
    predictions_dict = {classes[i]:round(predictions[i]*100,4) for i in range(len(classes))}
    return json.dumps({"prediction":classes[np.argmax(predictions)],"probabilites":predictions_dict}),200