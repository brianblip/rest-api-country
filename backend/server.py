from flask import Flask, jsonify,request
from flask_cors import CORS
import requests 

# app instance
app = Flask(__name__)
CORS(app)


@app.route("/api/countries", methods=["GET"])
def get_countries():
    restcountries_url = "https://restcountries.com/v3.1/all"
    response = requests.get(restcountries_url)

    if response.status_code == 200:
        countries = response.json()
        return jsonify(countries)
    else:
        return jsonify({"message": "Unable to fetch countries"}), 500

# Fetch countries by region
@app.route("/api/countries/region/<region>", methods=["GET"])
def get_countries_by_region(region):
    restcountries_url = f"https://restcountries.com/v3.1/region/{region}"
    response = requests.get(restcountries_url)

    if response.status_code == 200:
        countries = response.json()
        return jsonify(countries)
    else:
        return jsonify({"message": f"Unable to fetch countries in {region} region"}), 500
    
    # Fetch countries by name
@app.route("/api/countries/name/<name>", methods=["GET"])
def get_countries_by_name(name):
    restcountries_url = f"https://restcountries.com/v3.1/name/{name}"
    response = requests.get(restcountries_url)

    if response.status_code == 200:
        countries = response.json()
        return jsonify(countries)
    else:
        return jsonify({"message": f"Unable to fetch countries in {name} name"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)
