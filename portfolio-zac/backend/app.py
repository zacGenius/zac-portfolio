from flask import Flask, request, jsonify
from flask_cors import CORS
from database.database import DatabaseManager
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)  # Habilita CORS para todas as rotas

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    try:
        data = request.json
        
        # Validação básica
        if not data.get('name') or not data.get('email'):
            return jsonify({'error': 'Name and email are required'}), 400
        
        # Conecta ao banco de dados
        db = DatabaseManager()
        
        # Insere no banco
        query = """
        INSERT INTO contacts (name, email, subject, message, created_at)
        VALUES (%s, %s, %s, %s, %s)
        """
        params = (
            data.get('name'),
            data.get('email'),
            data.get('subject', ''),
            data.get('message', ''),
            datetime.now()
        )
        
        db.execute_query(query, params)
        
        return jsonify({
            'success': True, 
            'message': 'Thank you for your message! I will contact you soon.'
        }), 200
        
    except Exception as e:
        print(f"Error processing contact: {e}")
        return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)