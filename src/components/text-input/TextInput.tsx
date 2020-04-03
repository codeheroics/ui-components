import * as React from 'react';
import styles from './TextInput.module.scss';

type TextInputFeedbackType = 'error' | 'warning';

type _ForbiddenProps = 'size' | 'prefix' | 'type';

interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, _ForbiddenProps> {
  placeholder?: string;
  feedbackType?: TextInputFeedbackType;
  feedbackText?: string;
}

const shouldShowFeedback = ({ feedbackText, feedbackType }: TextInputProps) => {
  return feedbackText && feedbackType;
};

export const TextInput: React.FC<TextInputProps> = props => {
  const styledClassName =
    props.feedbackType && styles[props.feedbackType]
      ? styles[props.feedbackType]
      : '';

  return (
    <div className={`${styles.root} ${styledClassName}`}>
      <input
        {...props}
        className={`${styles.input} ${styledClassName}`}
        type='text'
      />
      {shouldShowFeedback(props) ? (
        <span className={`${styles.feedback} ${styledClassName}`}>
          {props.feedbackText}
        </span>
      ) : null}
    </div>
  );
};
