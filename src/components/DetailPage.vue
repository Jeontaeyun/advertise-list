<template>
{{postDescripton}}/template>
<script>
export default {
  data: function() {
    return {
      postDescription: null
    };
  },
  created: function() {
    this.$http
      .get(`detail.php?req_no=${this.$route.params.id}`)
      .then(result => {
        this.postDescriptoin = result.data.list;
      });
  }
};
</script>