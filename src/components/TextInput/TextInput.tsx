import React, { FC } from 'react';
import './TextInput.css';

type TextInputFeedbackType = 'error' | 'success' | 'warning';

type _ForbiddenProps = 'size' | 'prefix' | 'type';

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, _ForbiddenProps> {
  placeholder?: string;
  feedbackType?: TextInputFeedbackType;
  feedbackText?: string;
}

const classNameFromFeedbackType: Record<TextInputFeedbackType, string> = {
  error: 'error',
  success: 'success',
  warning: 'warning'
};

const getClassNameFromFeedbackType = (feedbackType?: TextInputFeedbackType) => {
  return feedbackType ? classNameFromFeedbackType[feedbackType] : '';
};

const shouldShowFeedback = ({ feedbackText, feedbackType }: TextInputProps) => {
  return feedbackText && feedbackType;
};

export const TextInput: FC<TextInputProps> = props => {
  const className = getClassNameFromFeedbackType(props.feedbackType);

  return (
    <div className={'root ' + className}>
      <input {...props} className={'input ' + className} type='text' />
      {shouldShowFeedback(props) ? (
        <span className={'feedback ' + className}>{props.feedbackText}</span>
      ) : null}
    </div>
  );
};
