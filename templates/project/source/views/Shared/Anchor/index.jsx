/**
 * @module Anchor component
 */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles';


/**
 * @type {Function} Anchor Stateless Component
 */
export default function Anchor(props) {
  const { className, children, ...rest } = props;
  return (
    <Link className={`${styles.Anchor} ${className}`} {...rest}>
      {children}
    </Link>
  );
}


/**
 * Anchor propTypes
 */
Anchor.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};


/**
 * Anchor defaultProps
 */
Anchor.defaultProps = {
  className: '',
  children: '',
};
