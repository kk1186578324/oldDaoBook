/* pages/classisc/classisc.wxss */
.container{
  width: 100%;
}
/* .header{
  height: 100rpx;
  padding: 30rpx;
} */

.red{
  background:red;
}
.blue{
  background:blue;
}
.green{
  background:green;
}
.box{
  width: 100px;
  height: 100px;
}
.content{
   display: flex;
   /* flex-direction: column; */
   /*子元素垂直排列 */
     /* flex-direction: column-reverse; */
   flex-direction: row;
   /* 子元素横着排 */
   /* flex-direction: row-reverse; */
   /* 倒序 */
    justify-content: flex-start;
   justify-content: flex-end;
   /* 控制对其方式 */
      justify-content: center;
      /* /居中/ */
   justify-content: space-between;
           /* 平均分布 */
  justify-content: space-around;
  /* 等距分布 */
    align-items: center;
    /* 交叉轴居中 */
      align-items: stretch;
    /* 在没有设置高度时拉伸 */
       align-items: baseline;
    /* 保证子元素文字基线对齐 */
    flex-wrap: wrap;
    /*保证完全释放宽高*/
   height:400px;
   background: #999;
}