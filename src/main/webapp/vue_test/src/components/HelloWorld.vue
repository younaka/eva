<template>
  <div class="table">
  <header id="header">
    <h1>あなたのスキルを登録＆共有しよう！</h1>
  </header>
  <table>
    <thead>
      <tr>
         <th class="no">No.</th>
         <th class="skill">スキル</th>
         <th class="level">習熟度（５段階）</th>
         <th class="comment">備考</th>
      </tr>
    </thead>
    <tbody>
     <tr v-for="item in skillset" v-bind:key="skillset.skill">
      <td class="no">{{ item.no}}</td>
      <td class="skill">{{ item.skill }}</td>
      <td class="level"><input type="range" min="1" max="5" step="1" :value="item.level"/>：レベル{{ item.level }}</td>
      <td class="left">{{ item.comment }}</td>
     </tr>
    </tbody>
    <tr>
      <td class="no">追加</td>
      <td class="skill"><input type="text" /></td>
      <td class="level"><input type="range" min="1"max="5" step="1" v-model.number="rotate"/>：レベル{{rotate}}</td>
      <td class="comment left"><input type="text" /></td>
    </tr>
  </table>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
   return {
    skillset: [
      { no: '例', skill: 'Java', level: 4, comment: 'ラムダ式も経験あり'},
      { no: '1', skill: 'AWS', level: 3, comment: 'インフラ構築の業務経験多数'},
      { no: '2', skill: 'C', level: 5, comment: '独学のみ'}
    ]
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
  width: 40%;
}
table {
  border-collapse: collapse;
  border: solid 2px orange;/*表全体を線で囲う*/
}
table th, table td {
  border: dashed 1px orange;/**/
  /*破線 1px オレンジ*/
}

table th{
  padding : 10px;
  color: #FF9800;/*文字色*/
  background: #fff5e5;/*背景色*/
}
table td{
  padding: 3px 10px;
  color: gray;
}
</style>
