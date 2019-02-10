<template>
 <tbody>
  <tr v-for="item in skillsets" v-bind:key="skillsets.skill">
   <td class="no">{{ item.no}}</td>
   <td class="skill"><input type="text" :value="item.skill" /></td>
   <td class="level"><input type="range" min="1" max="5" step="1" :value="item.level"/>：レベル{{ item.level }}</td>
   <td class="comment left"><input class="comment" type="text" :value="item.comment" /></td>
  </tr>
 </tbody>
</template>

<script>
export default {
  props: ['skillsets']
}
</script>

<style scoped>
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
