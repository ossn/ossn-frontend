const React = require('react');
let HackedMap;

if (typeof window !== 'undefined')
  HackedMap = require('react-leaflet');
else
  HackedMap = {
    Map: (props) => {return <div></div>},
    Marker: (props) => {return <div></div>},
    Popup: (props) => {return <div></div>},
    TileLayer: (props) => {return <div></div>}
  }

module.exports =  HackedMap;
