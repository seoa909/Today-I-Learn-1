# 버튼으로 토글링


```js
<div id="content">토글할 친구</ div>
<button type="button" id="toggle" value="0" style="width:200px; height:30px">Show</button>
```

```js

<script>
  $(function () {
    $('#content').hide();
  });

  $(function () {
    $('#toggle').on('click', function () {
      if ($('#toggle').val() == 0) {
        $('#toggle').val(1);
        $('#toggle').text('Hide');
      } else {
        $('#toggle').val(0);
        $('#toggle').text('Show');
      }
      let isHide = $('#toggle').val();
      if (isHide == 1) {
        $('#content').show();
      } else {
        $('#content').hide();
      }
    });
  });
</script>
```
