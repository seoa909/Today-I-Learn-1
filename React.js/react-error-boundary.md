```js
yarn add react-error-boundary
```

```js
<ErrorBoundary FallbackComponent={Error}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/book/:id" element={<Detail />} />
      <Route path="/add" element={<Add />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
</ErrorBoundary>
```
