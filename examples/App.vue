<template>
  <div id="app">
    <div class="tool">
      <input type="text" v-model="num"><div class="btn" @click="go">跳转</div>
      <input type="text" v-model="search"><div class="btn" @click="searchHandle">逐个搜索</div>
      <input type="text" v-model="key"><div class="btn" @click="searchAllHandle">全部高亮</div>
      <div class="cur_number btn">页码监听：{{curNumber}} / {{numPages}}</div>
    </div>
    <div class="out_line">
      <div>目录：</div>
      <div class="item" v-for="(item,index) in outline" :key="index" @click="goPage(item.pageNumber)">{{item.title}}</div>
    </div>
    <div class="con">
        <pdfComponent ref="pdf" url='/tsl.pdf' scale="1" :textMode="1" :singlePage="false" @loaded="loadedHandle" @pageChange="pageChange" @getOutLine="getOutLine"></pdfComponent>
    </div>
 
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      num:1,
      search:'重要',
      key:'保护',
      outline:[],
      numPages:'',
      curNumber:1
    }
  },
  mounted() {

  },
  methods:{
    loadedHandle(state){
      console.log('state--',state)
      this.numPages = state.numPages
      this.curNumber = state.curPageNum
    },
    pageChange(state){
      console.log('state--pageChange',state)
      this.curNumber = state.curPageNum
    },
    go(){
      console.log(this.num)
      this.$refs.pdf.pageGo(this.num)
    },
    goPage(num){
      this.$refs.pdf.pageGo(num)
    },
    searchHandle(){
      this.$refs.pdf.pdfFindAgain(this.search)
    },
    searchAllHandle(){
       this.$refs.pdf.pdfFindAll(this.key)
    },
    getOutLine(outline){
      console.log('outline',outline)
      this.outline = outline
    }
  }
}
</script>

<style>
.con{width:1200px; position: relative; margin:0 auto; height:100vh;}
.tool{display:flex; position: relative; z-index:100;}
input{height:30px;line-height:30px;}
.btn{text-align:center; line-height:30px; padding:0 10px; background:#d5d5d5; margin:0 5px;}
.out_line{width:200px; position:absolute; left:20px; top:50px; line-height:30px; z-index:99;}
</style>
