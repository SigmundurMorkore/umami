import React from 'react';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import Link from 'components/common/Link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className="container">
      <div className={classNames(styles.footer, 'row')}>
        <div className="col-12 col-md-4" />
        <div className="col-12 col-md-4">
          <FormattedMessage
            id="message.powered-by"
            defaultMessage="Powered by {name}"
            values={{
              name: (
                <Link href="https://analytics.fo">
                  <b>Analytics.fo</b>
                </Link>
              ),
            }}
          />
        </div>
      </div>
    </footer>
  );
}
