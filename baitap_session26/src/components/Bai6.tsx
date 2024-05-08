import React from 'react';

const FormatName = () => {
    const user = {
        firstName: 'Nguyễn Văn',
        lastName: 'Nam',
      };
    
  const formatName = () => {
    return `${user.firstName} ${user.lastName}`;
  };

  return <div>{formatName()}</div>;
};

export default FormatName;