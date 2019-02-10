<template>
  <div class="table">
    <header id="header">
      <h1>あなたのスキルを登録＆共有しよう！</h1>
    </header>
    <p><span class="big">渡邊　章二さん</span>のスキルセット</p>
      <table>
        <thead>
          <tr>
             <th class="no">No.</th>
             <th class="skill">スキル</th>
             <th class="level">習熟度（５段階）</th>
             <th class="comment">備考</th>
          </tr>
        </thead>
         <UserListData :skillsets="skillsets" v-if="user"/>
         <OtherListData :skillsets="skillsets" v-else />
         <AddSkill @add-skill-sets="addSkillSets" v-if="user"/>
      </table>
  </div>
</template>

<script>
import UserListData from './UserListData'
import OtherListData from './OtherListData'
import AddSkill from './AddSkill'

export default {
  name: 'SkillSet',
  components: {
    UserListData,
    OtherListData,
    AddSkill
  },
  data () {
   return {
    user: true,
    skillsets: [
      { no: '例', skill: 'Java', level: 4, comment: 'ラムダ式も経験あり'},
      { no: '1', skill: 'AWS', level: 3, comment: 'インフラ構築の業務経験多数'},
      { no: '2', skill: 'C', level: 5, comment: '独学のみ'}
    ]
   }
  },
  methods: {
    addSkillSets: function(skillset) {
    　this.$set(skillset, 'no', this.skillsets.length )
      this.skillsets.push(skillset)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  width: 800px;
  margin: 0 auto;
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
  width: 40%;
}

span.big {
  font-size: 1.6em;
}

table {
  border-collapse: collapse;
  border: solid 2px orange;/*表全体を線で囲う*/
}
table th {
  border: dashed 1px orange;/**/
  /*破線 1px オレンジ*/
  height: 35px;
  padding : 3px 10px;
  color: #FF9800;/*文字色*/
  background: #fff5e5;/*背景色*/
}

</style>
