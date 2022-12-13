import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

// Redux components
import { AbsencesActionType } from '../../../state/action-types/absencesActionType'
import { loadAbsences, clearAbsenses } from "../../../state/action-creators/absencesActionCreators";

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
          type: AbsencesActionType.LOAD_ALL_ABSENSES,
          payload: {
            status: "Loading",
            data: null,
          }
        },
        {
          type: AbsencesActionType.LOAD_ALL_ABSENSES,
          payload: {
            status: "Success",
            data: absencesTmpData,
          }
        }
      ];

      expect(actions).toEqual(expectedPayload);
    });
  }); // loadAbsences action creator

  describe("clearAbsenses action creator", () => {
    it("should dispatch loading status and success status", () => {
      // Initialize mockstore with empty state
      const store = mockStore(initialState);

      // Dispatch the action
      store.dispatch(clearAbsenses());

      // Test if your store dispatched the expected actions
      const actions = store.getActions();
      const expectedPayload = [
        {
          type: AbsencesActionType.CLEAR_ALL_ABSENSES
        },
      ];

      expect(actions).toEqual(expectedPayload);
    });
  }); // loadAbsences action creator
}); // Absences action creators