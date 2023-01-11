# Pydrive(File-Fetching)

### 설치
- pip install pydrive

### 예제
```js
from pydrive.drive import GoogleDrive
from pydrive.auth import GoogleAuth

gauth = GoogleAuth()
gauth.LocalWebserverAuth()

file_id = "1OxPQkMPdsR4M4aeVFNtAR3fk5DT60GTm"
drive = GoogleDrive(gauth)
file_name = "Sheet1.xlsx"

downloaded = drive.CreateFile({"id": file_id})
downloaded.GetContentFile(file_name)
print(downloaded.GetContentFile(file_name))

```
