<template>
  <div class="overlay content">
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
    <div class="right-data">
      <!-- <div class="right-content"> -->
      <div class="humidity right-content">
        <img class="right-icon" src="../assets/humidity.svg" alt="" />
        <h4>Humidity</h4>
        <h3>50%</h3>
      </div>
      <div class="air-pressure right-content">
        <img class="right-icon" src="../assets/pressure.svg" alt="" />
        <h4>Air Pressure</h4>
        <h3>1009.483 PS</h3>
      </div>
      <div class="rain-chance right-content">
        <img class="right-icon" src="../assets/rain.svg" alt="" />
        <h4>Chance of Rain</h4>
        <h3>0%</h3>
      </div>
      <div class="windspeed right-content">
        <img class="right-icon" src="../assets/wind.svg" alt="" />
        <h4>Wind Speed</h4>
        <h3>1.4km/h</h3>
      </div>
      <!-- </div> -->
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
.content {
  color: #fff;
}
.weather-data {
  position: absolute;
  top: 0;
  left: 0;
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
.right-data {
  position: absolute;
  top: 0;
  right: 0;
  /* display: ; */
}
/* .right-content {
  position: relative;
  display: flex;
  flex-direction: row;
} */
.right-icon {
  height: auto;
  width: 20px;
  position: relative;
  justify-content: left;
  display: flex;
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