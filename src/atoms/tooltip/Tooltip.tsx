import * as React from 'react';
import styled from 'styled-components';
import { white } from '@colors';
import { Placement } from '@atoms/tooltip/types';
import {
  getTooltipBgColorByType,
  handleTooltipArrowPosition,
  handleTooltipPosition,
  isTooltipOutOfContainer
} from '@atoms/tooltip/helpers';
import {
  getBoundingRect,
  getContainerBoundaries,
  getElementDimensions,
  getElementPlacement
} from '@utility/positionCompute';

export interface Props {
  title: string;
  /**
   * The position of the tooltip
   * @default top
   */
  placement?: 'right' | 'left' | 'top' | 'bottom';
  /**
   * A type that defines the tooltip color
   * @default info
   */
  type?: 'info' | 'success' | 'error';
  /**
   * Extra options
   * @default {tooltipMaxWidth: 300 (in px), container: window}
   */
  options?: {
    /**
     * A max width for the tooltip
     */
    tooltipMaxWidth?: number;
    /**
     * An element as a container (if not the default window)
     */
    container?: React.RefObject<HTMLElement>;
  };
}

interface State {
  placement: Placement | null;
}

export type WrapperProps = Omit<Required<Props>, 'title'>;

const TooltipWrapper = styled.span<WrapperProps>`
  > :first-child:hover {
    position: relative;
  }

  > :first-child::before {
    font-family: inherit;
    visibility: hidden;
    opacity: 0;
    font-size: 0.75rem;
    line-height: 1.25;
    display: inline-block;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 8px;
    background-color: ${({ type }: WrapperProps) =>
      getTooltipBgColorByType(type)};
    content: attr(data-tooltip);
    color: ${white};
    position: absolute;
    max-width: ${({ options }: WrapperProps) =>
      options.tooltipMaxWidth ? `${options.tooltipMaxWidth}px` : '300px'};
    width: max-content;
    @supports (-ms-ime-align: auto) {
      min-width: 50px;
    }
    word-wrap: break-word;
    transform: translate(-50%, 0);
    text-align: center;
    z-index: 1001;
    transition: opacity 0.1s ease-in-out;
    ${handleTooltipPosition}
  }

  > :first-child:hover::before {
    visibility: visible;
    opacity: 1;
  }

  > :first-child::after {
    display: inline-block;
    visibility: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid
      ${({ type }: WrapperProps) => getTooltipBgColorByType(type)};
    position: absolute;
    content: '';
    z-index: 1002;
    transition: opacity 0.1s ease-in-out;
    ${handleTooltipArrowPosition}
  }

  > :first-child:hover::after {
    visibility: visible;
    opacity: 1;
  }
`;

class Tooltip extends React.PureComponent<Props, State> {
  private ref: React.RefObject<HTMLElement> = React.createRef();
  private coordinates: { top: number | null; left: number | null };
  private readonly tooltipPossiblePlacements: Placement[] = [];
  private readonly defaultPlacement: Placement;

  public constructor(props: Props) {
    super(props);
    this.defaultPlacement = 'top';
    this.state = {
      placement: props.placement || this.defaultPlacement
    };
    this.tooltipPossiblePlacements = ['top', 'left', 'right', 'bottom'];
    this.coordinates = {
      top: null,
      left: null
    };
  }

  public componentDidUpdate(prevProps: Props, prevState: State): void {
    // if state is the same (the update came from prop change) do calculate else if state changed (update caused by new positioning) do not calculate again
    if (prevState.placement !== this.state.placement || !this.ref) {
      return;
    }
    this.positionTooltip();
  }

  private onHover = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const { top: previousTop, left: previousLeft } = this.coordinates;
    const { top, left } = getBoundingRect(target);

    if (top === previousTop && left === previousLeft) {
      return;
    }

    this.coordinates = { ...this.coordinates, ...{ top, left } };
    this.positionTooltip();
  };

  private positionTooltip() {
    if (!this.ref.current) {
      return;
    }
    const isBeforePseudoElement = true;
    const elementDimensions = getElementDimensions(
      this.ref,
      isBeforePseudoElement
    );

    const containerElement =
      (this.props.options &&
        this.props.options.container &&
        this.props.options.container.current) ||
      window;
    const containerDimensions = getContainerBoundaries(containerElement);
    try {
      const placement = getElementPlacement<Placement>(
        isTooltipOutOfContainer,
        this.props.placement || this.defaultPlacement,
        this.tooltipPossiblePlacements,
        elementDimensions,
        containerDimensions
      );
      this.setState({ placement: placement });
    } catch (e) {
      console.error(e);
    }
  }

  private cloneChildren = (title: string) => (
    child: React.ReactNode,
    key: number
  ) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        'data-tooltip': title,
        onMouseEnter: this.onHover,
        ref: key === 0 && this.ref
      });
    }
  };

  public render() {
    const {
      title = 'Default',
      type = 'info',
      children,
      options = {}
    } = this.props;
    const childrenWithProps = React.Children.map(
      children,
      this.cloneChildren(title)
    );

    return (
      <TooltipWrapper
        type={type}
        placement={this.state.placement || this.defaultPlacement}
        options={options}
      >
        {childrenWithProps}
      </TooltipWrapper>
    );
  }
}

export default Tooltip;
