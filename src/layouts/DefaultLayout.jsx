import React from 'react';
import PropTypes from 'prop-types';

/** Default layout component. */
function DefaultLayout({ children }) {
  return <div>{children}</div>;
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultLayout;
