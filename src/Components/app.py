from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Function to fetch participants from the database
def get_participants():
    conn = sqlite3.connect(r'C:\dev\dbot\vsoc24leaderboard.db')
    c = conn.cursor()
    c.execute("SELECT name, score FROM participants ORDER BY score DESC")
    participants = c.fetchall()
    conn.close()
    return participants

# API endpoint to get leaderboard data
@app.route('/leaderboard')
def leaderboard_api():
    participants = get_participants()
    return jsonify(participants)

if __name__ == '__main__':
    app.run(debug=True)