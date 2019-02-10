<template>
 <tbody>
  <tr v-for="item in skillsets" v-bind:key="skillsets.skill">
   <td class="no">{{ item.no}}</td>
   <td class="skill">{{item.skill}}</td>
   <td class="level"><input type="range" min="1" max="5" step="1" :value="item.level" readonly/>：レベル{{ item.level }}</td>
   <td class="left">{{item.comment}}</td>
  </tr>
 </tbody>
</template>

<script>
export default {
  props: ['skillsets']
}
</script>

<style scoped>
.left{
  text-align: left;
}
.no {
  width: 10%;
}
.skill {
  width: 20%;
}
.level {
  width: 30%;
}
.comment {
  width: 100%;
}

table td{
  padding: 3px 10px;
  height: 35px;
  border-collapse: collapse;
  border: dashed 1px orange;/**/
  /*破線 1px オレンジ*/
  color: gray;
}
</style>
