# from urllib import request, response
from flask import Flask ,request
from io import BytesIO
import cv2
import numpy as np
from PIL import Image
import io
import pandas as pd

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
    df['age'] = age
    df['sex'+'_'+sex] = 1
    df['localization'+'_'+localization] =1 
    
    
   
    return str(df.to_numpy()),200