<template>
  <div class="content">
    <div class="location"></div>
    <div class="weather-data"></div>
    <div class="hourlydata">
      <ul class="hourly-data">
        <li>
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </li>
        <li>
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </li>
        <li>
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </li>
        <li>
          <p class="hourly">3pm</p>
          <h1>28&deg;C</h1>
          <p>Feels like 30&deg;C</p>
        </li>
      </ul>
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
ul li {
  list-style: none;
  display: inline;
}
</style>