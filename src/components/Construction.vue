<template>
  <div class="construction">
    <h2>Coming Soon</h2>
    <p>
        A podcast highlighting the technology and innovation happening in the greater Atlanta area.
    </p>
    <ul>
      <li><i class="fa fa-twitter" aria-hidden="true"></i> <a href="https://twitter.com/teklanta" target="_blank">@Teklanta</a></li>
      <li><i class="fa fa-soundcloud" aria-hidden="true"></i> <a href="https://soundcloud.com/user-750349182" target="_blank">Episodes</a></li>
      <!--<li><a href="https://gitter.im/vuejs/vue" target="_blank">ITunes</a></li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'construction',
  data () {
    return {
      msg: 'Welcome to Teklanta'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
