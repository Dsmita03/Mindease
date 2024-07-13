from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

# Add your OpenAI API key here
openai.api_key = 'your-openai-api-key'

@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    try:
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=user_input,
            max_tokens=150
        )
        output = response.choices[0].text.strip()
        return jsonify({"response": output})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
