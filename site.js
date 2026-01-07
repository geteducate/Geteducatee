<script>
document.addEventListener('DOMContentLoaded', function(){
  const jobItems = document.querySelectorAll('.job-item'); // change selector to match your markup
  jobItems.forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      // navigate to portfolio either in same repo subfolder or external URL
      window.location.href = '/portfolio/'; // or 'https://geteducate.github.io/Portfolio/'
    });
  });
});
</script>