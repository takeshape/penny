const DEVTOOLS_RTT_ADJUSTMENT_FACTOR = 3.75;
const DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR = 0.9;

const throttling = {
  // These values partially align with WebPageTest's definition of "LTE".
  // https://github.com/WPO-Foundation/webpagetest/blob/master/www/settings/connectivity.ini.sample
  mobileLTE: {
    rttMs: 70,
    throughputKbps: 12 * 1024,
    requestLatencyMs: 70 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    downloadThroughputKbps: 12 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    uploadThroughputKbps: 12 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    cpuSlowdownMultiplier: 2
  },
  // These values partially align with WebPageTest's definition of "FIOS".
  desktopFIOS: {
    rttMs: 4,
    throughputKbps: 20 * 1024,
    cpuSlowdownMultiplier: 1,
    requestLatencyMs: 4 * DEVTOOLS_RTT_ADJUSTMENT_FACTOR,
    downloadThroughputKbps: 20 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR,
    uploadThroughputKbps: 5 * 1024 * DEVTOOLS_THROUGHPUT_ADJUSTMENT_FACTOR
  }
};

const IPHONE_EMULATION_METRICS = {
  mobile: true,
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  disabled: false
};

const DESKTOP_EMULATION_METRICS = {
  mobile: false,
  width: 1350,
  height: 940,
  deviceScaleFactor: 1,
  disabled: false
};

const screenEmulationMetrics = {
  mobile: IPHONE_EMULATION_METRICS,
  desktop: DESKTOP_EMULATION_METRICS
};

const MOBILE_USERAGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1 Chrome-Lighthouse';
const DESKTOP_USERAGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Chrome-Lighthouse';

const userAgents = {
  mobile: MOBILE_USERAGENT,
  desktop: DESKTOP_USERAGENT
};

module.exports = {
  throttling,
  screenEmulationMetrics,
  userAgents
};
