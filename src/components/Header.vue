<script setup>

</script>

<template>
  <!--header-->
  <header id="site-header" class="fixed-top">
    <div class="container">
      <nav class="navbar navbar-expand-lg stroke px-0 pt-lg-0">
        <h1> <a class="navbar-brand" href="#">
            <span class="fa fa-coffee"></span> Coffee Cafe
          </a></h1>
        <button class="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
          <span class="navbar-toggler-icon fa icon-close fa-times"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mx-lg-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item @@about__active">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item @@services__active">
              <a class="nav-link" href="#">Our coffees</a>
            </li>
            <li class="nav-item @@contact__active">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>

          <!--/search-right-->
          <div class="search-right">
            <a href="#search" title="search"><span class="fa fa-search" aria-hidden="true"></span></a>
            <!-- search popup -->
            <div id="search" class="pop-overlay">
              <div class="popup">

                <form action="#" method="GET" class="search-box">
                  <input type="search" placeholder="Enter Keyword" name="search" required="required" autofocus="">
                  <button type="submit" class="btn"><span class="fa fa-search" aria-hidden="true"></span></button>
                </form>

              </div>
              <a class="close" href="#close">×</a>
            </div>
            <!-- /search popup -->
          </div>
          <!--//search-right-->
          <div class="top-quote mr-lg-3 mt-lg-0">
            <a href="#buytheme" class="btn btn-style btn-primary">Buy Now</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <!--/header-->
</template>

<style scoped>

</style>
