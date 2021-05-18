import React, { FC } from 'react';

const ChartContainer = () => {
  const widgetOptions = {
    debug: false,
    symbol: 'Coinbase:BTC/USD',
    datafeed: Datafeed, // our datafeed object
    interval: '15',
    container_id: 'tv_chart_container',
    library_path: '/charting_library/',
    locale: getLanguageFromURL() || 'en',
    disabled_features: ['use_localstorage_for_settings'],
    enabled_features: [],
    client_id: 'test',
    user_id: 'public_user_id',
    fullscreen: false,
    autosize: true,
    overrides: {
      'paneProperties.background': '#131722',
      'paneProperties.vertGridProperties.color': '#363c4e',
      'paneProperties.horzGridProperties.color': '#363c4e',
      'symbolWatermarkProperties.transparency': 90,
      'scalesProperties.textColor': '#AAA',
      'mainSeriesProperties.candleStyle.wickUpColor': '#336854',
      'mainSeriesProperties.candleStyle.wickDownColor': '#7f323f',
    },
  };
  return (
    <>
      <h1>Chart</h1>
      <p>test</p>
    </>
  );
};
