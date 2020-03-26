import * as React from 'react';
import './TextInput.css';

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

const getClassNameFromFeedbackType = (
  feedbackType?: TextInputFeedbackType
): string => {
  return feedbackType ? classNameFromFeedbackType[feedbackType] : '';
};

const shouldShowFeedback = ({
  feedbackText,
  feedbackType
}: TextInputProps): boolean => {
  return (
    feedbackType !== undefined &&
    feedbackText !== undefined &&
    feedbackText !== null &&
    feedbackText.length > 0
  );
};

export const TextInput: React.FC<TextInputProps> = props => {
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
