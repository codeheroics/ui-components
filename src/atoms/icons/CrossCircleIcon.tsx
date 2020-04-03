import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const CrossCircleIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.6637 8.39704L8.39703 12.6637L7.33637 11.603L11.603 7.33638L12.6637 8.39704Z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.603 12.6637L7.3363 8.39704L8.39696 7.33638L12.6636 11.603L11.603 12.6637Z'
      />
      <path d='M15.262 13.8167C16.0407 12.745 16.5 11.4261 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C11.4421 16.5 12.7745 16.0304 13.8526 15.2357L14.9231 16.3062C13.5656 17.3675 11.8567 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8407 17.3783 13.5363 16.3334 14.8881L15.262 13.8167Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default CrossCircleIcon;
