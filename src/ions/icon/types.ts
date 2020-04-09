import * as React from 'react';

export interface Props {
  /**
   * The svg content to display
   */
  children: React.ReactElement;
  /**
   * The icon title (displayed on svg hover)
   */
  title?: string;
  /**
   * The icon size in px, determines the icon width and height
   * Takes precendence over the "width" and "height" props
   * @default 20px
   */
  size?: number;
  /**
   * The icon width in px
   * Used when "size" has no value
   * @default 20px
   */
  width?: number;
  /**
   * The icon height in px
   * Used when "size" has no value
   * @default 20px
   */
  height?: number;
  /**
   * A disabled state for the icon wrapper
   * @default false
   */
  disabled?: boolean;
  /**
   * The icon color
   * @default dashGreen00 (dashlane default dark green)
   */
  color?: string;
  /**
   * The icon color when hovered
   * @default dashGreen00 (dashlane default dark green)
   */
  hoverColor?: string;
  /**
   * The icon color when active
   * @default dashGreen00 (dashlane default dark green)
   */
  activeColor?: string;
  /**
   * Allows to redefine the coordinates of the SVG element.
   * @default '0 0 20 20'
   **/
  viewBox?: string;
}

export type IconProps = Pick<Props, Exclude<keyof Props, 'children'>>; // Using this rather than Omit<Props, 'children'> because Docz is not able to understand the Omit syntax and to parse the props
