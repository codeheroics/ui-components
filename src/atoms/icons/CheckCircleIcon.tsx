import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const CheckCircleIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M9.23989 10.7168L12.1705 7.68797L13.2485 8.73101L9.22458 12.8898L6.97226 10.4954L8.06485 9.46763L9.23989 10.7168Z'
      />
      <path d='M13.8347 15.2489C12.7597 16.0356 11.4341 16.5 10 16.5C6.41015 16.5 3.5 13.5899 3.5 10C3.5 6.41015 6.41015 3.5 10 3.5C13.5899 3.5 16.5 6.41015 16.5 10C16.5 11.4341 16.0356 12.7597 15.2489 13.8347L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L13.8347 15.2489Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default CheckCircleIcon;
