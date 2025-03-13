import { Component, ErrorInfo, ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>Oops,something happened</h1>
          <p className={styles.errorText}>Please reload the page</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
