import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('FullHeader', module)
  .add('with title', () => {
    return <FullHeader title="TDD" />
  })
  .add('with title and subtitle', () => (
    <FullHeader 
      title="TDD" 
      subtitle="JS with TDD Course"/>
  ))
  .add('with title, subtitle, bgColor', () => (
    <FullHeader 
      title="TDD" 
      subtitle="JS with TDD Course"
      bgColor="#3299BB"
    />

  ))
  .add('with title, subtitle, bgColor and textColor', () => (
    <FullHeader 
      title="TDD" 
      subtitle="JS with TDD Course"
      bgColor="#3299BB"
      textColor="#FF9900"
    />
  ))
  .add('with title, subtitle, bgColor, textColor and font', () => (
    <FullHeader 
      title="TDD" 
      subtitle="JS with TDD Course"
      bgColor="#3299BB"
      textColor="#FF9900"
      font="cursive"
    />
  ))
  .add('with title, subtitle and bgImg', () => (
    <FullHeader 
      title="TDD" 
      subtitle="JS with TDD Course"
      bgImg="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
    />
  ))
  .add('with title, subtitle and video', () => (
    <FullHeader 
      title="TDD" 
      subtitle="JS with TDD Course"
      bgColor="#EBE9EB"
      textColor="#3299BB"
      video="http://teragigame.ga/files/madcowfilms.webm"
    />
  ))
  
