<template>
  <b-jumbotron>
    <template slot="header">
      Categories <b-btn v-b-modal.modal1 variant="success">New</b-btn>
    </template>

    <b-table show-empty striped hover :fields="fields" :items="categories">
      <template :slot="'created-at'" slot-scope="data">
        {{data.item.createdAt | formatDate }}
      </template>
      <template slot="actions" slot-scope="data">
        <b-button-group>
          <b-button @click="onEntry(data.item._id)" variant="warning">Edit</b-button>
          <b-button @click="remove(data.item._id)" variant="danger">Remove</b-button>
        </b-button-group>
      </template>
    </b-table>

    <!-- Modal Component -->
    <b-modal @ok="onSave" @hidden="onHidden" ref="modal1" id="modal1" title="Create new Category">
      <b-form>
        <b-form-group id="exampleInputGroup1"
                      label="Name:"
                      label-for="exampleInput1">
          <b-form-input id="exampleInput1"
                        type="text"
                        v-model="category.name"
                        required
                        placeholder="Enter name">
          </b-form-input>
        </b-form-group>
      </b-form>
    </b-modal>
  </b-jumbotron>
</template>

<script>
  import { mapMutations, mapActions } from 'vuex'

  export default {
    name: 'CategoriesPage',
    data () {
      return {
        fields: ['name', 'created-at', 'actions']
      }
    },
    computed: {
      category () {
        return this.$store.state.Categories.model
      },
      categories () {
        return this.$store.state.Categories.collection
      }
    },
    watch: {
      category: {
        handler (value) {
          this.updateCategory(value)
        },
        deep: true
      }
    },
    mounted () {
      this.fetch()
    },
    methods: {
      onEntry (_id) {
        this.entry(_id)

        this.$refs.modal1.show()
      },
      onHidden () {
        this.reset()
      },
      onSave () {
        if (Object.prototype.hasOwnProperty.call(this.category, '_id')) {
          this.update()
        } else {
          this.create()
        }
      },
      ...mapMutations({
        updateCategory: 'Categories/UPDATE_MODEL',
        reset: 'Categories/RESET_MODEL'
      }),
      ...mapActions({
        create: 'Categories/create',
        update: 'Categories/update',
        fetch: 'Categories/all',
        entry: 'Categories/entry',
        remove: 'Categories/remove'
      })
    }
  }
</script>

<style scoped>

</style>