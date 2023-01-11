# BIG-O-NOTATION

- O(1) – 상수 시간 : 입력값 n 이 주어졌을 때, 알고리즘이 문제를 해결하는데 오직 한 단계만 거칩니다. 
->  스택에서 Push, Pop
- O(log n) – 로그 시간 : 입력값 n 이 주어졌을 때, 문제를 해결하는데 필요한 단계들이 연산마다 특정 요인에 의해 줄어듭니다.
-> 이진트리
- O(n) – 직선적 시간 : 문제를 해결하기 위한 단계의 수와 입력값 n이 1:1 관계를 가집니다.
-> for 문
- O(n^2) – 2차 시간 : 문제를 해결하기 위한 단계의 수는 입력값 n의 제곱입니다.
-> 이중 for 문, 삽입정렬(insertion sort), 거품정렬(bubble sort), 선택정렬(selection sort)
- O(C^n) – 지수 시간 : 문제를 해결하기 위한 단계의 수는 주어진 상수값 C 의 n 제곱입니다. 
-> 피보나치 수열

![111](https://user-images.githubusercontent.com/59503331/185717799-3c0512a5-f540-405c-ad95-8b990dc38410.png)
![asda](https://user-images.githubusercontent.com/59503331/185721809-29a76d24-5602-473f-ae34-018ddab4cdb3.png)
정렬 알고리즘 비교
Sorting Algorithms

|제목|최악|최선|평균|최악|
|------|---|---|---|---|
|Bubble Sort|O(1)|O(n)|O(n2)|O(n2)|
|Heapsort|O(1)|O(n log n)|O(n log n)|O(n log n)|
|Insertion Sort|O(1)|O(n)|O(n2)|O(n2)|
|Mergesort|O(n)|O(n log n)|O(n log n)|O(n log n)|
|Quicksort|O(n log n)|O(n log n)|O(n log n)|O(n2)|
|Selection Sort|O(1)|O(n2)|O(n2)|O(n2)|
|Shell Sort|O(1)|O(n)|O(n log n2)|O(n log n2)|
|Smooth Sort|O(1)|O(n)|O(n log n)|O(n log n)|
