<script setup lang="ts">

</script>

<template>
<div class="container">
  <div class="row">
    <div class="article" dir="rtl">
      <form action="">
          <div class="row">
            <div class="col col-md-4">
              <label class="form-label " for="title">تیتر:</label>
              <input type="text" name="" id="title" class="form-control">
            </div>
            <div class="col col-md-4">
              <label class="form-label" for="file">دسته بندی : </label>
              <select class="form-select" name="" id="file">
                <option value=""> hi </option>
              </select>
            </div>
            <div class="col col-md-4">
              <label class="form-label" for="pic-news">تصویر خبر  :</label>
              <input type="file" name="" id="pic-news" class="form-control">
            </div>
            <div class="col">
              <label class="form-label" for="subTitle">رو تیتر:</label>
              <input type="text" name="" id="subTitle" class="form-control">
            </div>
            <div class="">
              <label class="form-label" for="summery">خلاصه توضیحات :</label>
              <textarea name="" id="summery" class="form-control" ></textarea>
            </div>
            <div class="">
              <label class="form-label " for="description">توضیحات :</label>
              <textarea name="" id="description" class="form-control" ></textarea>
            </div>
          </div>
      </form>
    </div>
  </div>
</div>
</template>

<style scoped>
form label{
  cursor: pointer;
}
</style>