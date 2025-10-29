'use client';

import { createContext, JSX, ReactNode, useContext, useState } from 'react';
import cn from 'classnames';

import styles from './SnackBar.module.css';

export const defaultDuration = 500;
export const defaultInterval = 250;

export enum SnackBarTypes {
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning',
  loading = 'loading',
}

export function createCtx<ContextType>(): readonly [() => ContextType, React.Provider<ContextType | undefined>] {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

type SnackbarProps = {
  children: ReactNode;
};

type SnackbarContextType = {
  openSnackbar: (text: string, type: SnackBarTypes, duration: number) => void;
  closeSnackbar: () => void;
};

export const [useSnackBar, CtxProvider] = createCtx<SnackbarContextType>();

function SnackBarProvider(props: Readonly<SnackbarProps>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(
    setTimeout(() => {
      return;
    }, 1),
  );
  const [text, setText] = useState('');
  const [type, setType] = useState(SnackBarTypes.info);
  const { children } = props;

  const triggerSnackbar = (text: string, type: SnackBarTypes, duration: number): void => {
    setText(text);
    setType(type);
    setIsOpen(true);
    clearTimeout(timeoutId);
    setTimeoutId(setTimeout(() => setIsOpen(false), duration));
  };

  const openSnackbar = (text: string, type: SnackBarTypes, duration: number): void => {
    if (isOpen === true) {
      setIsOpen(false);
      setTimeout(() => {
        triggerSnackbar(text, type, duration);
      }, defaultInterval);
    } else {
      triggerSnackbar(text, type, duration);
    }
  };

  const closeSnackbar = (): void => {
    setIsOpen(false);
  };

  return (
    <CtxProvider value={{ openSnackbar, closeSnackbar }}>
      {children}

      {isOpen && (
        <div className="fixed right-0 bottom-0 left-0 z-10 m-4">
          <div
            className={cn({
              [styles.success]: type === SnackBarTypes.success,
              [styles.error]: type === SnackBarTypes.error,
              [styles.info]: type === SnackBarTypes.info,
              [styles.warning]: type === SnackBarTypes.warning,
              [styles.loading]: type === SnackBarTypes.loading,
            })}
            role="alert"
          >
            <div>{text}</div>
            <span className="absolute top-0 right-0 bottom-0 px-4 py-3">
              <button onClick={closeSnackbar}>
                <svg
                  className={cn({
                    [styles.successicon]: type === SnackBarTypes.success,
                    [styles.erroricon]: type === SnackBarTypes.error,
                    [styles.infoicon]: type === SnackBarTypes.info,
                    [styles.warningicon]: type === SnackBarTypes.warning,
                    [styles.loadingicon]: type === SnackBarTypes.loading,
                  })}
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </button>
            </span>
          </div>
        </div>
      )}
    </CtxProvider>
  );
}
export default SnackBarProvider;
