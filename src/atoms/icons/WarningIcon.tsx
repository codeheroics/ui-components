import * as React from 'react';
import SvgWrapper from '@ions/icon/wrapper/SvgWrapper';

const WarningIcon: React.FunctionComponent<
  import('../../ions/icon/types').IconProps
> = (props: import('../../ions/icon/types').IconProps): JSX.Element => (
  <SvgWrapper {...props}>
    <React.Fragment>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0619 2L18 18H2L10.0619 2ZM4.44661 16.4931H15.5703L10.0515 5.36948L4.44661 16.4931Z'
      />
      <path d='M9.25 9H10.75V13H9.25V9Z' />
      <path d='M9.25 14H10.75V15.5H9.25V14Z' />
    </React.Fragment>
  </SvgWrapper>
);

export default WarningIcon;
