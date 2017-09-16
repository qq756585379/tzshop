<template>
  <div class="cell2">
    <div class="section_header" v-if="index===0">
      <i></i><span>精选内容</span>
    </div>
    <div class="content">
      <img :src="cell2Data.imgSrc">
      <div class="right_wrap">
        <p>{{cell2Data.des}}</p>
        <span>{{cell2Data.category}}</span>
        <div>
          <img :src="cell2Data.smalllicon"><span>{{cell2Data.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      index: {
        type: Number,
        default: 0
      },
      cell2Data: {
        type: Object
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scope>
  @import "../../common/scss/mixins";

  .cell2 {
    background-color: white;
    .section_header {
      height: 30px;
      padding: 5px 15px;
      i {
        display: block;
        float: left;
        height: 13px;
        width: 15px;
        margin: 8px 0;
        @include bg-image('./images/Featured');
        background-size: 15px 13px;
        background-repeat: no-repeat;
      }
      span {
        float: left;
        margin-left: 5px;
        font-size: 15px;
        color: #333;
        vertical-align: top;
        height: 100%;
        line-height: 30px;
      }
    }
    .content {
      display: block;
      height: 125px;
      & > img{
        display: inline-block;
        vertical-align: top;
        width: 45%;
        height: 125px;
      }
      .right_wrap{
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        p{
          color: #333;
          margin: 5px 5px 30px 0;
        }
        & > span{
          position: absolute;
          bottom: 40px;
          left: 0;
          text-align: center;
          display: block;
          width: 55px;
          height: 18px;
          border: solid 1px darkgray;
          border-radius: 5px;
          line-height: 20px;
          font-size: 12px;
        }
        div{
          margin-top: 10px;
          height: 26px;
          position: absolute;
          bottom: 5px;
          left: 0;
          img{
            width: 26px;
            border-radius: 13px;
            display: inline-block;
            vertical-align: top;
          }
          span{
            display: inline-block;
            font-size: 12px;
            height: 26px;
            line-height: 26px;
            margin-left: 5px;
          }
        }
      }
    }
  }

</style>
