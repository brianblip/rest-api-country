from flask import Flask, jsonify

# app instance
app = Flask(__name__)

@app.route("/api/data", methods=["GET"])
def return_home():
    return jsonify({
        'data': "Welcome to the REST API project!",
    })

if __name__ == "__main__":
    app.run(debug=True)