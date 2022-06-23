import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../../paths';
import styles from './styles.module.css';

export const PlaneItem = ({ name = '', price = 0, planeImage = '', id = '', opacity = '' }) => {
  return (
    <Link to={`${paths.plane}/${id}`} className={styles.planeItem}>
      <div className={styles.opacity}>{opacity}</div>
      {planeImage && <img className={styles.image} src={planeImage} alt="" />}
      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.price}>{price}</span>
      </div>
    </Link>
  );
};
