<template>
  <div class="hello">
    <span>What is 2^6 * 0</span>
    <input v-model="value" type="number" name="answer"/>
    <button @click="assert">Check</button>
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'HelloWorld',
  props: {
    url: String
  },
  data: () => ({
    value: "",
    cookies: {}
  }),
  methods: {
    assert() {
      axios({
        url: this.url,
        method: 'post',
        headers: {
					'X-CSRFToken': this.cookies["csrftoken"],
          'Content-Type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        data: JSON.stringify({
          answer: Number.parseInt(this.value)
        })
      })
    }
  },
  mounted() {
    this.cookies = document.cookie.split(";").reduce((o, c) => {
      const [key, value] = c.split('=');
      o[key.trim()] = value;
      return o
    }, {})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
