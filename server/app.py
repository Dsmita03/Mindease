from flask import Flask, request, jsonify
import openai
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/api/send', methods=['POST'])
def send_prompt():
    data = request.get_json()
    prompt = data.get('prompt', '')

    try:
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=prompt,
            max_tokens=150
        )
        response_text = response['choices'][0]['text'].strip()
        return jsonify({'response': response_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
