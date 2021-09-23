<template>
  <div class="overlay content">
    <div class="location"></div>
    <div class="weather-data">
      <div class="weatherdata-wrapper">
        <img class="weather-icon" src="../assets/fog.svg" alt="" />
        <h1>Fog</h1>
        <h4>Lower Kabete</h4>
        <strong>
          <h1 class="kubwa">28&deg;C</h1>
        </strong>
        <p>
          <img class="small-icon" src="../assets/map.svg" alt="" /> Change
          location
        </p>
      </div>
    </div>
    <div class="hourlydata">
      <div class="data-row">
        <div class="databox1">
          <p class="hourly">1pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox2">
          <p class="hourly">2pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox3">
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox4">
          <p class="hourly">4pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox5">
          <p class="hourly">5pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox6">
          <p class="hourly">6pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox7">
          <p class="hourly">7pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox8">
          <p class="hourly">8pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherData",
};
</script>

<style>
/* .overlay {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(https://images.unsplash.com/photo-1482858683229-74280d78908b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5530707633478a5be10d25f09dacf9ef&auto=format&fit=crop&w=700&q=60);
  background-size: cover;
   background-position: top; 
  position: relative;
} */
.content {
  color: #fff;
}
.weatherdata-wrapper {
  position: relative;
  padding-left: 60px;
  width: 250px;
  height: 400px;
  line-height: 1em;
  text-align: left;
}
.weather-icon {
  height: auto;
  width: 100px;
}
.small-icon {
  height: auto;
  width: 14px;
  cursor: pointer;
}
.kubwa {
  font-size: 65px;
  font-weight: 900;
}
.hourly {
  text-transform: uppercase;
}
.data-row {
  height: 200px;
  margin: 0 auto;
  display: table-row;
  position: absolute;
  bottom: 0px;
}
.databox1,
.databox2,
.databox3,
.databox4,
.databox5,
.databox6,
.databox7,
.databox8 {
  width: 200px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 0 1px rgba(241, 241, 241, 0.5);
  padding: 0 20px;
}
.databox1:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>