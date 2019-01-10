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
   /*��Ԫ�ش�ֱ���� */
     /* flex-direction: column-reverse; */
   flex-direction: row;
   /* ��Ԫ�غ����� */
   /* flex-direction: row-reverse; */
   /* ���� */
    justify-content: flex-start;
   justify-content: flex-end;
   /* ���ƶ��䷽ʽ */
      justify-content: center;
      /* /����/ */
   justify-content: space-between;
           /* ƽ���ֲ� */
  justify-content: space-around;
  /* �Ⱦ�ֲ� */
    align-items: center;
    /* ��������� */
      align-items: stretch;
    /* ��û�����ø߶�ʱ���� */
       align-items: baseline;
    /* ��֤��Ԫ�����ֻ��߶��� */
    flex-wrap: wrap;
    /*��֤��ȫ�ͷſ��*/
   height:400px;
   background: #999;
}

appID:wx18939f7ccdd1676e
appSecret:    09f81372f17516aec6831816934828a9