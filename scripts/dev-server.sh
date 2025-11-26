#!/bin/bash

# Development server for OTO Transcribe website (modular version)
# Serves the app/client/ directory for local development

PORT=8080
DIR="app/client"

echo "🚀 Starting OTO development server..."
echo "📂 Serving from: $DIR"
echo "🌐 URL: http://localhost:$PORT"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server
python3 -m http.server $PORT --directory "$DIR"
