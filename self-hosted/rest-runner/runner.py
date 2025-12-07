from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)
UPLOAD_FOLDER = "./uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/run", methods=["POST"])
def run_command():
    # Check if a file is uploaded
    if "file" not in request.files:
        return "No file part", 400
    
    file = request.files["file"]
    
    if file.filename == "":
        return "No selected file", 400

    # Save uploaded file
    name = file.filename	
    fname = os.path.join(UPLOAD_FOLDER, name)
    file.save(fname)

    # Define the command using the file
    # Example: listing the file (replace with your real command)
    #command = f"ls {file_path}"  
    command = f"ocrmypdf -q --force-ocr -l pol {fname} {fname}_ocr.pdf && pdftotext {fname}_ocr.pdf {fname}_ocr.txt && cat {fname}_ocr.txt"  
    
    print(command)
	
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            check=False
        )
        # Return stdout and stderr as plain text
        output = f"{result.stdout}"
        return output, 200
    except Exception as e:
        return f"Error: {str(e)}", 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
