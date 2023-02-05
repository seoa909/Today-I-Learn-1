# css로 애니메이션 - @keyframes

```js
@keyframes check-text {
  0% {
    transform: translateX(-500px);
  }
  100% {
    transform: translateX(0);
  }
}

.footer-check-text:nth-of-type(1) {
  animation-name: check-text;
  animation-duration: 2s;
}
```
