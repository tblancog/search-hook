import { useReducer, useCallback } from "react";
import { Action, SearchResult, State, Status } from "../types";

const initialState: State = {
  results: [],
  status: "IDLE",
  error: null,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOADING":
      return { ...state, status: "LOADING", error: null };
    case "RESULT_OK":
      return {
        ...state,
        status: "RESULT_OK",
        results: action.payload,
        error: null,
      };
    case "ERROR":
      return { ...state, status: "ERROR", error: action.payload, results: [] };
    default:
      return state;
  }
};

const useSearch = (): {
  fetchResults: (query: string) => Promise<void>;
  results: SearchResult[];
  status: Status;
  error: string | null;
} => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchResults = useCallback(async (query: string) => {
    dispatch({ type: "LOADING" });

    try {
      const response = await fetch(`/api/data?search=${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const results: SearchResult[] = await response.json();
      dispatch({ type: "RESULT_OK", payload: results });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: "ERROR", payload: err.message });
      }
    }
  }, []);

  return {
    fetchResults,
    results: state.results,
    status: state.status,
    error: state.error,
  };
};

export default useSearch;
