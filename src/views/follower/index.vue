<template>
  <div class="p-[30px]">
    <div class="title">Trending</div>
    <div class="grid grid-cols-3 gap-[50px]">
      <div class="card-div">
        <img src="@/assets/img/following-tweets.jpeg" class="trending-img" />
        <div>
          <div class="trending-title">24K</div>
          <div class="trending-desc">Followers</div>
        </div>
        <div class="text-[#50BB25] trending-tips">+168.001%</div>
      </div>
      <div class="card-div">
        <img src="@/assets/img/following-tweets.jpeg" class="trending-img" />
        <div>
          <div class="trending-title">1st</div>
          <div class="trending-desc">Rank</div>
        </div>
        <div class="text-[#DC3546] trending-tips">-168.001%</div>
      </div>
      <div class="card-div">
        <img src="@/assets/img/following-tweets.jpeg" class="trending-img" />
        <div>
          <div class="trending-title">$299</div>
          <div class="trending-desc">Ticket Price</div>
        </div>
        <div class="text-[#50BB25] trending-tips">+168.001%</div>
      </div>
    </div>
    <div class="title mt-[40px]">Your Follower</div>
    <div class="grid grid-cols-4 gap-[30px]">
      <div class="card-div items-center justify-between">
        <img src="@/assets/img/following-tweets.jpeg" class="fllower-img" />
        <div class="fllower-title">Papaya</div>
        <div class="fllower-btn">Follow</div>
      </div>
      <div class="card-div justify-center items-center">
        <img src="@/assets/img/following-tweets.jpeg" class="fllower-img" />
        <div class="fllower-title">Papaya</div>
        <div class="fllower-btn">Follow</div>
      </div>
      <div class="card-div justify-center items-center">
        <img src="@/assets/img/following-tweets.jpeg" class="fllower-img" />
        <div class="fllower-title">Papaya</div>
        <div class="fllower-btn">Follow</div>
      </div>
      <div class="card-div justify-center items-center">
        <img src="@/assets/img/following-tweets.jpeg" class="fllower-img" />
        <div class="fllower-title">Papaya</div>
        <div class="fllower-btn">Follow</div>
      </div>
      <div class="card-div justify-center items-center">
        <img src="@/assets/img/following-tweets.jpeg" class="fllower-img" />
        <div class="fllower-title">Papaya</div>
        <div class="fllower-btn">Follow</div>
      </div>
      <div class="card-div justify-center items-center">
        <img src="@/assets/img/following-tweets.jpeg" class="fllower-img" />
        <div class="fllower-title">Papaya</div>
        <div class="fllower-btn">Follow</div>
      </div>
      <div class="card-div justify-center items-center">
        <img src="@/assets/img/following-tweets.jpeg" class="fllower-img" />
        <div class="fllower-title">Papaya</div>
        <div class="fllower-btn">Follow</div>
      </div>
      <div class="card-div justify-center items-center">
        <img src="@/assets/img/following-tweets.jpeg" class="fllower-img" />
        <div class="fllower-title">Papaya</div>
        <div class="fllower-btn">Follow</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
</script>
<style lang='less' scoped>
.title{
  color: #FFF;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
}
.card-div{
  border-radius: 18px;
  background-color: #30264E;
  padding: 20px;
  display: flex;
  position: relative;
}
.trending-img{
  width: 55px;
  height: 55px;
  margin-right: 17px;
  border-radius:50%;
}
.trending-title{
  color: #FFF;
  font-size: 24px;
  font-weight: 600;
}
.trending-desc{
  color: #68676E;
  font-size: 14px;
  font-weight: 400;
}
.trending-tips{
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  right: 50px;
  top: 20px;
}
.fllower-img{
  width: 43px;
  height: 43px;
  border-radius: 50%;
  margin-right: 12px;
}
.fllower-title{
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
}
.fllower-btn{
  margin-left: 19px;
  color: #FFF;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 13px;
  border-radius: 9px;
  border: 1px solid #6F4FF2;
  background: rgba(111, 79, 242, 0.00);
}
</style>