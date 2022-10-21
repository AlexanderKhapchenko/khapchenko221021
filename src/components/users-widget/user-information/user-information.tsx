import React, { ReactElement } from 'react';

import './styles.css';

interface UserInformationProps {
  title: string;
  info: string;
  type: 'phone' | 'email' | 'link';
}

const UserInformation: React.FC<UserInformationProps> = ({
  title,
  info,
  type,
}) => {
  const renderInfoType = (): ReactElement => {
    switch (type) {
      case 'email':
        return (
          <a className="link" href={`mailto:${info}`}>
            {info}
          </a>
        );
      case 'link':
        return (
          <a className="link" href={`${info}`}>
            {info}
          </a>
        );
      case 'phone':
        return (
          <a className="phone" href={`tel:${info}`}>
            {info}
          </a>
        );
    }
  };

  return (
    <div className="box">
      <p className="title">{title}</p>
      {renderInfoType()}
    </div>
  );
};

export { UserInformation };
