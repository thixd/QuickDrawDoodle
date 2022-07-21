
from unittest import result
from urllib import response
from flask import Flask, request
import cv2
from keras.models import load_model
import numpy as np
from flask import jsonify
from flask import request, make_response
import os , io , sys
model = load_model('model/quickDrawModel.h5')
# helper
labels = ['toothbrush',
          'camera',
          'banana',
          'star',
          'ice cream',
          'lightning',
          'fish',
          'guitar',
          'birthday cake']
def preprocess_image(image):
    img_size = 28
    img = cv2.resize(image, (img_size, img_size), interpolation=cv2.INTER_AREA)
    img = np.array(img, dtype=np.float32)
    img = np.reshape(img, (-1, img_size, img_size, 1))
    return img
def predictLableFromImg(model, image):
    processed = preprocess_image(image)
    pred_prob = model.predict(processed)[0]