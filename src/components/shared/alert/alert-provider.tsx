import React from "react";
import { Alert } from "./alert";

export type IActionTypes = "SET_STATE" | "SET_TEXT";
export type IAction = { type: IActionTypes; payload: any };
export type IDispatch = (action: IAction) => void;
export type IState = { state: boolean; text: string; accept: boolean; type: "error" | "warn" | "info" };
export type ICountProviderProps = { children: React.ReactNode };

const AlertStateContext = React.createContext<IState | undefined>(undefined);
const AlertDispatchContext = React.createContext<IDispatch | undefined>(undefined);

function alertReducer(state: IState, action: IAction) {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, state: action.payload.state, accept: action.payload.accept };
    case "SET_TEXT":
      return { ...state, text: action.payload.text, type: action.payload.type };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function AlertProvider({ children }: ICountProviderProps) {
  const [state, dispatch] = React.useReducer(alertReducer, { state: false, text: "", accept: false, type: "info" });

  return (
    <AlertStateContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>
        {children}
        <Alert
          text={state.text}
          open={state.state}
          onClose={(accept: boolean) => dispatch({ type: "SET_STATE", payload: { state: false, accept } })}
        />
      </AlertDispatchContext.Provider>
    </AlertStateContext.Provider>
  );
}

function useAlertState() {
  const context = React.useContext(AlertStateContext);
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider");
  }
  return context;
}

function useAlertDispatch() {
  const context = React.useContext(AlertDispatchContext);
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider");
  }
  return context;
}

const useAlert = () => {
  const openModal: IAction = { type: "SET_STATE", payload: { state: true, accept: false } };
  const disppatch = useAlertDispatch();
  const state = useAlertState();

  const setAlert = (text: string, type: string) => {
    disppatch(openModal);
    disppatch({ type: "SET_TEXT", payload: { text, type: type } });
    return state.accept;
  };

  class Alert {
    static error = (text: string) => {
      return setAlert(text, "error");
    };
    static info = (text: string) => {
      return setAlert(text, "info");
    };
    static warn = (text: string) => {
      return setAlert(text, "warn");
    };
  }

  return Alert;
};

export { AlertProvider, useAlertState, useAlertDispatch, useAlert };
