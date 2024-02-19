<template>
  <div>

    <div class="animsition">
      <div class="page-wrapper">
        <!-- HEADER DESKTOP-->
        <Header/>
        <!-- END HEADER DESKTOP -->

        <!-- WELCOME-->
        <section class="welcome2 p-t-40 p-b-55">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="au-breadcrumb3">
                  <div class="au-breadcrumb-left">
                    <span class="au-breadcrumb-span">You are here:</span>
                    <ul class="list-unstyled list-inline au-breadcrumb__list">
                      <li class="list-inline-item active">
                        <nuxt-link class="text-decoration-none" to="#">Home</nuxt-link>
                      </li>
                      <li class="list-inline-item seprate">
                        <span>/</span>
                      </li>
                      <li class="list-inline-item">Dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="welcome2-inner m-t-60">
                  <div class="welcome2-greeting">
                    <h1 class="title-6">Hi
                      <span>John</span>, Welcome back</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </div>
                  <form class="form-header form-header2" action="" method="post">
                    <input class="au-input au-input--w435" type="text" name="search"
                           placeholder="Search for datas &amp; reports...">
                    <button class="au-btn--submit" type="submit">
                      <i class="zmdi zmdi-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- END WELCOME-->

        <!-- PAGE CONTENT-->
        <div class="page-container3">
          <section class="alert-wrap p-t-70 p-b-70">
            <div class="container">
              <!-- ALERT-->
                <alert/>
              <!-- END ALERT-->
            </div>
          </section>
          <section>
            <div class="container">
              <div class="row">
                <div class="col-xl-3">
                  <!-- MENU SIDEBAR-->
                  <aside class="menu-sidebar3 js-spe-sidebar">
                    <sideBarMenu/>
                  </aside>
                  <!-- END MENU SIDEBAR-->
                </div>
                <div class="col-xl-9">
                  <!-- PAGE CONTENT-->
                  <div class="page-content">
                    <div class="row">
                      <div class="col-lg-8">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <!-- DATA TABLE-->
                        <dataTable :data="data"/>
                        <!-- END DATA TABLE                  -->
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <TasksCalender/>
                      </div>
                      <div class="col-lg-6">
                        <chat/>
                      </div>
                    </div>
                  </div>
                  <!-- END PAGE CONTENT-->
                </div>
              </div>
            </div>
          </section>
        </div>
        <!-- END PAGE CONTENT  -->

      </div>

      <!-- Jquery JS-->
      <!--    <script src="vendor/jquery-3.2.1.min.js"></script>-->
      <!-- Bootstrap JS-->
      <!--    <script src="vendor/bootstrap-4.1/popper.min.js"></script>-->
      <!--    <script src="vendor/bootstrap-4.1/bootstrap.min.js"></script>-->
      <!-- Vendor JS       -->
      <!--    <script src="vendor/slick/slick.min.js">-->
      <!--    </script>-->
      <!--    <script src="vendor/wow/wow.min.js"></script>-->
      <!--    <script src="vendor/animsition/animsition.min.js"></script>-->
      <!--    <script src="vendor/bootstrap-progressbar/bootstrap-progressbar.min.js">-->
      <!--    </script>-->
      <!--    <script src="vendor/counter-up/jquery.waypoints.min.js"></script>-->
      <!--    <script src="vendor/counter-up/jquery.counterup.min.js">-->
      <!--    </script>-->
      <!--    <script src="vendor/circle-progress/circle-progress.min.js"></script>-->
      <!--    <script src="vendor/perfect-scrollbar/perfect-scrollbar.js"></script>-->
      <!--    <script src="vendor/chartjs/Chart.bundle.min.js"></script>-->
      <!--    <script src="vendor/select2/select2.min.js">-->
      <!--    </script>-->

      <!-- Main JS-->
      <!--    <script src="js/main.js"></script>-->

    </div>
  </div>
</template>

<script setup>
const data = ref({
  dataTable: [
    {
      date: "2018-09-29 05:57",
      device: "Mobile",
      deviceName: "iPhone X 64Gb Grey",
      success: "Processed",
      price: "$999.00"
    },
    {
      date: "2018-09-28 01:22",
      device: "Mobile",
      deviceName: "Samsung S8 Black",
      success: "Processed",
      price: "$756.00"
    },
    {
      date: "2018-09-27 02:12",
      device: "Game",
      deviceName: "Game Console Controller",
      success: "Denied",
      price: "$22.00"
    },
    {
      date: "2018-09-26 23:06",
      device: "Mobile",
      deviceName: "iPhone X 256Gb Black",
      success: "Denied",
      price: "$1199.00"
    },
    {
      date: "2018-09-25 19:03",
      device: "Accessories",
      deviceName: "USB 3.0 Cable",
      success: "Processed",
      price: "$10.00"
    },
    {
      date: "2018-09-29 05:57",
      device: "Accesories",
      deviceName: "Smartwatch 4.0 LTE Wifi",
      success: "Denied",
      price: "$199.00"
    },
    {
      date: "2018-09-24 19:10",
      device: "Camera",
      deviceName: "Camera C430W 4k",
      success: "Processed",
      price: "$699.00"
    },
    {
      date: "2018-09-22 00:43",
      device: "Computer",
      deviceName: "Macbook Pro Retina 2017",
      success: "Processed",
      price: "$10.00"
    },
  ]
})
</script>

<style scoped>

</style>