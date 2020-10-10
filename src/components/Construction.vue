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
    <button v-on:click="openForm" class="btnApply">Apply to be a Guest</button>
  </div>
</template>

<script>
export default {
  name: 'construction',
  data () {
    return {
      msg: 'Welcome to Teklanta'
    }
  },
  methods: {
    openForm: () => {
      console.log('Navigating to application form')
      window.open('https://goo.gl/forms/0vBIl1aehO5wFOjP2')
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

/*
  Adapted from https://codepen.io/palimadra/pen/jHodC
*/
.btnApply {
  background-color: #42b983;
  background-image: linear-gradient(167deg, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0) 55%), linear-gradient(to bottom, rgba(255, 255, 255, 0.15), rgba(0, 0, 0, 0));
  border-radius: 6px;
  box-shadow: 0 0 0 1px #42b983 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #12b983, 0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5);
  color: #FFF;
  display: inline-block;
  /* font-family: "Lucida Grande", Arial, sans-serif; */
  font-size: 1.1em;
  font-weight: bold;
  height: 61px;
  letter-spacing: -1px;
  margin: 30px 0 10px;
  position: relative;
  text-align: center;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  text-decoration: none !important;
  top: 0;
  width: 186px;
  -moz-transition: 0.15s;
  -o-transition: 0.15s;
  -webkit-transition: 0.15s;
  transition: 0.15s;
}
.btnApply:hover, .btnApply:focus {
  background-color: #52b983;
  box-shadow: 0 0 0 1px #42b983 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 10px 0 0 #12b983, 0 10px 0 1px rgba(0, 0, 0, 0.4), 0 10px 8px 1px rgba(0, 0, 0, 0.6);
  top: -2px;
}
.btnApply:active {
  box-shadow: 0 0 0 1px #12b983 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 0 0 1px rgba(0, 0, 0, 0.4);
  -moz-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -webkit-transform: translateY(10px);
  transform: translateY(10px);
}



</style>
