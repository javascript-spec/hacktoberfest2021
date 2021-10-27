import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Main.css';
import VoiceActions from 'VoiceActions';
import MapView from './MapView';

const Main = () => {
  const [latLong, setLatLong] = useState({ lat: 37.40599, lng: -122.078514 });
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const [isp, setIsp] = useState('');
  const [timezone, setTimezone] = useState('');
  const [ip, setIp] = useState('');

  useEffect(() => {
    const url = `https://geo.ipify.org/api/v1?apiKey=at_2vTG07BaiN6spBlwtk2x6Y374lJd2&ipAddress=${ipAddress}`;
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res;
        } else throw new Error('Not Found');
      })
      .then((res) => res.json())
      .then((data) => {
        const l1 = data.location.lat;
        const l2 = data.location.lng;
        const obj = { lat: l1, lng: l2 };
        if (l1 !== undefined && l2 !== undefined) {
          setLatLong(obj);
        }
        setIpAddress(data.ip);
        setLocation(data.location.region);
        setIsp(data.isp);
        setTimezone(`UTC ${data.location.timezone}`);
      })
      .catch();
  }, [ipAddress]);

  const handleClick = () => {
    setIpAddress(ip);
  };

  const handleChange = (e) => {
    setIp(e.target.value);
  };

  VoiceActions({ actionIds: ['btn1'] });

  return (
    <div className='main_container'>
      <div className='upper_box'>
        <h2 id='top'>IP Address Tracker</h2>
        <div className='search_container'>
          <input
            id='ip_input'
            type='text'
            placeholder='Search for any IP address or domain'
            onChange={(e) => handleChange(e)}></input>
          <IconButton id='btn' onClick={handleClick}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
      <div className='data_card'>
        <div className='data'>
          <p className='small'>IP ADDRESS</p>
          <p className='large'>{ipAddress}</p>
        </div>
        <div className='data'>
          <p className='small'>LOCATION</p>
          <p className='large'>{location}</p>
        </div>
        <div className='data'>
          <p className='small'>TIMEZONE</p>
          <p className='large'>{timezone}</p>
        </div>
        <div className='data'>
          <p className='small'>ISP</p>
          <p className='large'>{isp}</p>
        </div>
      </div>
      <button id='btn1'>Test Button 1</button>
      <MapView latLong={latLong} />
    </div>
  );
};

export default Main;
