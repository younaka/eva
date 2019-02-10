<template>
  <tbody>
    <tr class="bg_gray">
      <td class="no"><button class="button" v-on:click="add">追加</button></td>
      <td class="skill"><input type="text" v-model="skill"/></td>
      <td class="level"><input type="range" min="1" max="5" step="1" v-model.number="level"/>：レベル{{level}}</td>
      <td class="comment left"><input class="comment" type="text" v-model="comment"/></td>
    </tr>
  </tbody>
</template>

<script>
export default {
  data () {
   return {
    skillset: null,
    skill: 'Ruby',
    level: 3,
    comment: '独学のみ'
   }
  },
  methods: {
    add: function() {
      this.skillset = {
        skill: this.skill,
        level: this.level,
        comment: this.comment
      }
      this.$emit('add-skill-sets', this.skillset)
      this.skill = ""
      this.level = 3
      this.comment = ""
    }
  }
}
</script>

<style scoped>
.bg_gray {
  background-color:#eeeeee;
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
