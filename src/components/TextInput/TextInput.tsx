import * as React from 'react';
import style from './TextInput.module.scss';

type TextInputFeedbackType = 'error' | 'warning';

type _ForbiddenProps = 'size' | 'prefix' | 'type';

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, _ForbiddenProps> {
  placeholder?: string;
  feedbackType?: TextInputFeedbackType;
  feedbackText?: string;
}

const classNameFromFeedbackType: Record<TextInputFeedbackType, string> = {
  error: 'error',
  warning: 'warning'
};

const getClassNameFromFeedbackType = (feedbackType?: TextInputFeedbackType) => {
  return feedbackType ? classNameFromFeedbackType[feedbackType] : '';
};

const shouldShowFeedback = ({ feedbackText, feedbackType }: TextInputProps) => {
  return feedbackText && feedbackType;
};

export const TextInput: React.FC<TextInputProps> = props => {
  const className = getClassNameFromFeedbackType(props.feedbackType);
  const styledClassName = style[className] ? style[className] : '';

  return (
    <div className={`${style.root} ${styledClassName}`}>
      <input
        {...props}
        className={`${style.input} ${styledClassName}`}
        type='text'
      />
      {shouldShowFeedback(props) ? (
        <span className={`${style.feedback} ${styledClassName}`}>
          {props.feedbackText}
        </span>
      ) : null}
    </div>
  );
};
