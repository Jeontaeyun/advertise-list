<template>
  <div>
    <b-card>
      <b-media>
        <small>댓글</small>
        <h5 class="mt-0">{{reply.email}}</h5>
        <p>{{reply.updated_at}}</p>
        <p>{{reply.contents}}</p>
      </b-media>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    reply: Object
  }
};

<style lang="less"></style>;
