import RequestStatus from "../../../type-defs/requestStatus";

// Redux components
import getMembers from "../../../state/selectors/membersSelectors";

// Mock Data
import members from '../../../__mocks__/members'

describe('Members selectors', () => {
  it('getMembers should return all members', () => {
    const state = {
      members: {
        status: RequestStatus.Success,
        data: members
      }
    }

    const expectedOutput = {
      status: RequestStatus.Success,
      data: members
    }

    expect(getMembers(state)).toEqual(expectedOutput)
  }) // getMembers
}) // Members selectors
