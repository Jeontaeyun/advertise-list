<template></template>
<script>
export default {
  created: function() {
    this.$http.get(`detail.php?req_no=1`).then(result => {
      //this.ads = result.data.list;
    });
  }
};
</script>