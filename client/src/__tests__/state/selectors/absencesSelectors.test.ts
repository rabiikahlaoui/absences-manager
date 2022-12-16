import mergeArrays from "../../../utils/mergeArrays";
import RequestStatus from "../../../type-defs/requestStatus";

// Redux components
import getAbsences, { getAbsencesFilter, getMembersAbsences } from "../../../state/selectors/absencesSelectors";

// Mock Data
import absences from '../../../__mocks__/absences'
import members from '../../../__mocks__/members'
import membersAbsences from "../../../__mocks__/membersAbsences";

describe('Absences selectors', () => {
  it('getAbsences should return all absences', () => {
    const state = {
      absences: {
        status: RequestStatus.Success,
        filter: { date: null, type: null },
        data: absences
      }
    }

    const expectedOutput = {
      status: RequestStatus.Success,
      filter: { date: null, type: null },
      data: absences
    }

    expect(getAbsences(state)).toEqual(expectedOutput)
  }) // getAbsences

  it('getAbsencesFilter should return the current filter', () => {
    const state = {
      absences: {
        status: RequestStatus.Success,
        filter: { date: null, type: null },
        data: absences
      }
    }

    const expectedOutput = { date: null, type: null }

    expect(getAbsencesFilter(state)).toEqual(expectedOutput)
  }) // getAbsencesFilter

  it('getMembersAbsences should return a merged array of members and their absences', () => {
    const state = {
      absences: {
        status: RequestStatus.Success,
        filter: { date: null, type: null },
        data: absences
      },
      members: {
        status: RequestStatus.Success,
        data: members
      }
    }

    const expectedOutput = {
      status: RequestStatus.Success,
      data: membersAbsences
    }

    expect(getMembersAbsences(state)).toEqual(expectedOutput)
  }) // getMembersAbsences

  it('getMembersAbsences should handle null status', () => {
    const state = {
      absences: {
        status: null,
        filter: { date: null, type: null },
        data: null
      },
      members: {
        status: RequestStatus.Success,
        data: members
      }
    }

    const expectedOutput = { status: null }

    expect(getMembersAbsences(state)).toEqual(expectedOutput)
  }) // getMembersAbsences null status

  it('getMembersAbsences should handle loading status', () => {
    const state = {
      absences: {
        status: RequestStatus.Loading,
        filter: { date: null, type: null },
        data: null
      },
      members: {
        status: RequestStatus.Success,
        data: members
      }
    }

    const expectedOutput = { status: RequestStatus.Loading }

    expect(getMembersAbsences(state)).toEqual(expectedOutput)
  }) // getMembersAbsences loading status
}) // Absences selectors
