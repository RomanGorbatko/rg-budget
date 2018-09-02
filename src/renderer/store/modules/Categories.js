import { dbs } from '../../services/DB'

const defaults = {
  name: undefined
}

const state = {
  collection: [],
  model: {
    ...defaults
  }
}

const mutations = {
  APPLY_COLLECTION: (state, payload) => {
    state.collection = payload
  },
  UPDATE_MODEL: (state, payload) => {
    state.model = payload
  },
  UPDATE_MODEL_IN_COLLECTION: (state, index) => {
    state.collection.splice(index, 1, state.model)
  },
  APPEND_COLLECTION: (state, payload) => {
    if (payload) {
      state.collection.push(payload)
    } else {
      state.collection.push(JSON.parse(JSON.stringify(state.model)))
    }
  },
  RESET_MODEL: (state) => {
    state.model = {...defaults}
  }
}

const actions = {
  all ({ commit }) {
    dbs.categories.find().exec((err, docs) => {
      if (err) return false

      commit('APPLY_COLLECTION', docs)
    })
  },
  entry ({ commit }, _id) {
    dbs.categories.findOne({ _id }, (err, doc) => {
      if (err) return false

      commit('UPDATE_MODEL', doc)
    })
  },
  create ({ commit, state }) {
    dbs.categories.insert(state.model, (err, doc) => {
      if (err) return false

      commit('APPEND_COLLECTION', doc)
      commit('RESET_MODEL')
    })
  },
  update ({ commit, state }) {
    dbs.categories.update({ _id: state.model._id }, state.model, (err, doc) => {
      if (err) return false

      const index = state.collection.findIndex(item => item._id === state.model._id)
      commit('UPDATE_MODEL_IN_COLLECTION', index)
    })
  },
  remove ({ commit, state }, _id) {
    dbs.categories.remove({ _id }, () => {
      const collection = state.collection.filter(item => item._id !== _id)

      commit('APPLY_COLLECTION', collection)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
