import config
import requests
import time
from flask import Flask, jsonify


app = Flask(__name__)

data_cache = None
last_update_time = 0
update_interval = 600  # 10 minutes in seconds

# API endpoint URL
tamarama =  19161
api_url = 'https://api.willyweather.com.au/v2/' + config.willyweather_key + '/locations/' + str(tamarama) + '.json'

def update_data():
    global data_cache, last_update_time

    try:
        response = requests.get(api_url)
        if response.status_code == 200:
            data_cache = response.json()
            last_update_time = time.time()
            print("Api call worked")
        else:
            print("API request was not successful. Status code:", response.status_code)
    except requests.exceptions.RequestException as e:
        print("An error occurred during API request:", e)

def get_cached_data():
    global data_cache
    return data_cache

@app.route("/get_data", methods=["GET"])
def get_data():
    current_time = time.time()

    # Check if it's time to update the data
    if current_time - last_update_time >= update_interval:
        update_data()

    data = get_cached_data()
    if data:
        return jsonify(data)
    else:
        return "Data not available"


if __name__ == "__main__":
    # Initial data retrieval
    update_data()

    # Start the Flask app
    app.run(host="0.0.0.0", port=5000)