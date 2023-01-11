# addDoc

# 상황
일단 storage에 image를 올리고, 거기서 이제 image, 폴더이름, 사진이름을 가지고 db 컬렉션에 저장

```js
  const onClickHandler = async () => {
    const blob = await fetch(url).then((r) => r.blob());
    console.log(blob.type);
    if (blob.type === "text/html")
      return alert("사용할 수 없는 사진입니다. 사진을 바꾸세요.");

    alert("사진 등록 중(완료라고 나올때까지 기다립시다.)");
    const upload_file = await uploadBytes(
      ref(storage, `${folder}/${title}.png`),
      blob
    );
    const dbCollection = collection(db, `${folder}`);
    // DB에 사진 추가
    const file_url = await getDownloadURL(upload_file.ref);
    await addDoc(dbCollection, { name: `${title}`, url: file_url });
    alert("사진 등록 완료");
  };
  ```
