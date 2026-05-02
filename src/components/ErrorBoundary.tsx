import React, { Component, ErrorInfo, ReactNode } from "react";

// 1. Definimos o que o componente recebe (Propriedades)
interface Props {
  children: ReactNode; // Aqui avisamos que ele aceita componentes filhos
}

// 2. Definimos o que o componente controla internamente (Estado)
interface State {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorMessage: ""
  };

  public static getDerivedStateFromError(error: Error): State {
    // Atualiza o estado para que a próxima renderização mostre a interface de erro
    return { hasError: true, errorMessage: error.message };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erro capturado:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red", border: "1px solid red", margin: "20px" }}>
          <h2>Ops! Algo deu errado no Segure Aqui.</h2>
          <p><strong>Detalhe técnico:</strong> {this.state.errorMessage}</p>
          <button onClick={() => window.location.reload()}>Tentar Novamente</button>
        </div>
      );
    }

    // CORREÇÃO AQUI: Usamos this.props.children para acessar os filhos
    return this.props.children; 
  }
}

export default ErrorBoundary;