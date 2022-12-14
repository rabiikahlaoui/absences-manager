// Redux components
import reducer, { initialState } from "../../../state/reducers/absencesReducer";
import { AbsencesActionType } from "../../../state/action-types";

// Mock Data
import * as absencesTmpData from "../../../__mocks__/absences.json";

describe("Absences reducer", () => {
  it("should return the initial state", () => {
    const dispatchedAction = {
      type: undefined,
    };

    expect(reducer(undefined, dispatchedAction)).toEqual(initialState);
  });

  it("should handle load all absences", () => {
    const expectedState = {
      status: "Success",
      data: absencesTmpData,
    };

    const dispatchedAction = {
      type: AbsencesActionType.LOAD_ALL_ABSENCES,
      payload: {
        status: "Success",
        data: absencesTmpData,
      },
    };

    expect(reducer(initialState, dispatchedAction)).toEqual(expectedState);
  });

  it("should handle clear all absences and return the initial state", () => {
    const previousState = {
      status: "Success",
      data: absencesTmpData,
    };

    const dispatchedAction = {
      type: AbsencesActionType.CLEAR_ALL_ABSENCES,
    };

    expect(reducer(previousState, dispatchedAction)).toEqual(initialState);
  });
}); // Absences reducer
