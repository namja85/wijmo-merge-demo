<template>
  <div class="hello">
    <wj-flex-grid
      :itemsSource="data"
      :initialized="onInitialized"
    >
      <wj-flex-grid-column :header="'ID'" :binding="'id'" />
      <wj-flex-grid-column :header="'NAME'" :binding="'name'" />
      <wj-flex-grid-column :header="'LOCATION'" :binding="'location'" />
    </wj-flex-grid>
  </div>
</template>

<script>
import "@grapecity/wijmo.styles/wijmo.css";
// import * as wjCore from "@grapecity/wijmo";
// import * as wjGrid from "@grapecity/wijmo.grid";
import "@grapecity/wijmo.vue2.grid";
import CustomMergeManager from '../CustomMergeManager';

const data = [
  {
    id: 0,
    name: 'namja85',
    location: 'korea'
  },
  {
    id: 1,
    name: 'namja85',
    location: 'korea'
  },
  {
    id: 2,
    name: 'babo',
    location: 'korea'
  },
]

export default {
  name: 'HelloWorld',
  data() {
    return {
      data
    }
  },
  methods: {
    onInitialized(flexGrid) {
      flexGrid.mergeManager = new CustomMergeManager(1, [1, 2]);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
