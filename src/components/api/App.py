import requests

url = "https://103.84.207.4:8000/predict"
data = {"query": "prabowo pki"}
response = requests.post(url, json=data)

print(response.json())