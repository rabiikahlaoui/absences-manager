import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AbsencesPaginator } from '../../../pages/absences'

describe('Absence paginator component', () => {
  it('Should show total absences', async () => {
    render(
      <AbsencesPaginator
        currentPage={1}
        totalPages={1}
        totalAbsences={123}
        onPageChange={() => {}}
      />
    )

    const loadingState = await screen.findByText(/123/i)
    expect(loadingState).toBeInTheDocument()
  }) // Should show total absences

  it('Navigation buttons should be disabled', async () => {
    const { container } = render(
      <AbsencesPaginator
        currentPage={1}
        totalPages={1}
        totalAbsences={123}
        onPageChange={() => {}}
      />
    )

    const prevButton = container.getElementsByClassName('arrow-left')[0]
    expect(prevButton).toBeDisabled()

    const nextButton = container.getElementsByClassName('arrow-right')[0]
    expect(nextButton).toBeDisabled()
  }) // Navigation buttons should be disabled

  it('Should emit OnPageChange', async () => {
    const {container} = render(
      <AbsencesPaginator
        currentPage={1}
        totalPages={1}
        totalAbsences={123}
        onPageChange={() => {}}
      />
    )

    const prevButton = container.getElementsByClassName('arrow-left')[0]
    expect(prevButton).toBeDisabled()
  }) // Should emit OnPageChange
}) // Absence paginator component
