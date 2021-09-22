<template>
  <div class="content">
    <div class="location"></div>
    <div class="weather-data"></div>
    <div class="hourlydata">
      <div class="data-row">
        <div class="databox1">
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox2">
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox3">
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox4">
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox5">
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox6">
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox7">
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </div>
        <div class="databox8">
          <p class="hourly">3pm</p>
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
.content {
  color: #fff;
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
}
.databox1:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>