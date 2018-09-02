<template>
  <div>
    <b-jumbotron header="RG Budget"
                 lead="Yet another Budget managment application"
    >
      <p>Dashboard coming soon..</p>
    </b-jumbotron>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>

</style>