import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {

  it('should have header tag when mount', () => {
    const wrapper = shallow(<FullHeader />);
    expect(wrapper.find('header')).to.have.length(1);
  });

  context('title', () => {
    it('should have h1 tag when title is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper.find('h1')).to.have.length(1);
    });
  
    it('should not have h1 tag when title is not passed', () => {
      const wrapper = shallow(<FullHeader />);
      expect(wrapper.find('h1')).to.have.length(0);
    });
  
    it('should have h1 tag with the title passed', () => {
      const wrapper = shallow(<FullHeader title="TDD"/>);
      expect(wrapper.find('h1').props().children).to.be.equal('TDD');
    });
  });

  context('subtitle', () => {
    it('should have h2 when subtitle passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" subtitle="Curso" />);
      expect(wrapper.find('h2')).to.have.length(1);
    });

    it('should not have h2 when subtitle is not passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper.find('h2')).to.have.length(0);
    });

    it('should have h2 tag with the subtitle passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" subtitle="Curso"/>);
      expect(wrapper.find('h2').props().children).to.be.equal('Curso');
    });

  });

  context('bgColor', () => {
    it('should have background-color equal to #ccc when none is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" />);
      expect(wrapper).to.have.style('background-color').equal('#ccc');
    });

    it('should have background-color equal to #000 when #000 is passed', () => {
      const wrapper = shallow(<FullHeader title="TDD" bgColor="#000"/>);
      expect(wrapper).to.have.style('background-color').equal('#000');
    });
  });
});
