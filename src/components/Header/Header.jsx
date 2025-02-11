import React from 'react';
import { useIntl } from 'react-intl';

import img from '../../img/eu.jpeg';

import style from './Header.module.css';
import { LINKS } from '../../constants/links';
import { LTDA } from '../../constants/ltda';
import { ME } from '../../constants/me';

const Header = () => {
  const { formatMessage } = useIntl();

  const name = formatMessage({
    id: 'header.name',
  });

  console.log(LINKS);

  return (
    <div className={style.Header}>
      <div className={style.half}>
        <div className={style.profile}>
          <img src={img} alt={name}></img>
        </div>
        <div className={style.info}>
          <h1 className={style.title}>{name}</h1>
          <ul className={style.list}>
            <li className={style.item}>
              {formatMessage({
                id: 'header.info.email',
              })}
            </li>
            <li className={style.item}>
              {formatMessage({
                id: 'header.info.location',
              })}
            </li>
            <li className={style.item}>
              {formatMessage(
                {
                  id: 'header.info.formation',
                },
                {
                  strong: str => <strong key={str}>{str}</strong>,
                },
              )}
            </li>

            <li className={style.item}>
              {formatMessage(
                {
                  id: 'header.info.employ',
                },
                {
                  strong: str => <strong key={str}>{str}</strong>,
                  company: str => (
                    <a
                      className={style.link}
                      href={LINKS[LTDA.SELF][LTDA.VNATOR]}
                      target="_blank"
                      rel="noopener noreferrer">
                      {str}
                    </a>
                  ),
                },
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={`${style.half} ${style._bio}`}>
        <h2 className={style.subtitle}>
          {formatMessage({
            id: 'header.bio.title',
          })}
        </h2>
        <p className={style.text}>
          {formatMessage({
            id: 'header.bio.paragraph',
          }, {
            shaped: str => (
              <a
                className={`${style.link} ${style._revert}`}
                href={LINKS[ME.SELF][ME.SHAPED]}
                target='_blank'
                rel="noopener noreferrer">
                {str}
              </a>)
          })}
        </p>
      </div>
    </div>
  );
};

export { Header };
