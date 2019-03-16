import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  bgColor: '#ccc',
};

const FullHeader = ({ title, subtitle, bgColor }) => {
  const headerStyle = {
    backgroundColor: bgColor,
  };

  return (<header style={headerStyle}>
    {title && <h1>{title}</h1>}
    {subtitle && <h2>{subtitle}</h2>}
  </header>);
};

const propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  bgColor: PropTypes.string,
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
