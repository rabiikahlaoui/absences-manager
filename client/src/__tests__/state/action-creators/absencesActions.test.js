import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Redux components
import { AbsencesActionType } from '../../../state/action-types'
import { loadAbsences, clearAbsences } from "../../../state/action-creators/absencesActionCreators";

// Mock Data
import * as absencesTmpData from "../../../__mocks__/absences.json";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {};

describe("Absences action creators", () => {
  describe("loadAbsences action creator", () => {
    it("should dispatch loading status and success status", () => {
      // Initialize mockstore with empty state
      const store = mockStore(initialState);

      // Dispatch the action
      store.dispatch(loadAbsences());

      // Test if your store dispatched the expected actions
      const actions = store.getActions();
      const expectedPayload = [
        {
          type: AbsencesActionType.LOAD_ALL_ABSENCES,
          payload: {
            status: "Loading",
            data: null,
          }
        },
        {
          type: AbsencesActionType.LOAD_ALL_ABSENCES,
          payload: {
            status: "Success",
            data: absencesTmpData,
          }
        }
      ];

      expect(actions).toEqual(expectedPayload);
    });
  }); // loadAbsences action creator

  describe("clearAbsences action creator", () => {
    it("should dispatch loading status and success status", () => {
      // Initialize mockstore with empty state
      const store = mockStore(initialState);

      // Dispatch the action
      store.dispatch(clearAbsences());

      // Test if your store dispatched the expected actions
      const actions = store.getActions();
      const expectedPayload = [
        {
          type: AbsencesActionType.CLEAR_ALL_ABSENCES
        },
      ];

      expect(actions).toEqual(expectedPayload);
    });
  }); // loadAbsences action creator
}); // Absences action creators
