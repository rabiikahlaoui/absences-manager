import { createEvent, DateArray, EventAttributes } from 'ics'
import MemberAbsence from '../type-defs/memberAbsence'
import downloadTextFile from './downloadTextFile'

const onDownloadICalFile: Function = (absence: MemberAbsence): void => {
  const event: EventAttributes = {
    title: getICalAbsenceTitle(absence),
    description: getICalAbsenceDescription(absence),
    start: getDateArrayFromString(absence.startDate),
    end: getDateArrayFromString(absence.endDate)
  }

  createEvent(event, (error: any, value: string) => {
    if (error !== null) {
      console.log(error)
    }

    downloadTextFile(`${absence.name}_absence_${absence.startDate}_${absence.endDate}.ics`, value)
  })
}

/**
 * Generate title for iCal file
 * @param absence
 * @returns absence title
 */
const getICalAbsenceTitle = (absence: MemberAbsence): string => {
  return `Absence of ${absence.name} - ${absence.startDate} to ${absence.endDate} - ${absence.type}`
}

/**
 * Generate description for iCal file
 * @param absence
 * @returns absence description
 */
const getICalAbsenceDescription = (absence: MemberAbsence): string => {
  return `Member note: ${absence.memberNote ?? 'K.A.'}\nAdmitter note: ${absence.admitterNote ?? 'K.A.'}`
}

/**
 * Convert string date to DateArray
 * @param dateString
 * @returns date array
 */
const getDateArrayFromString = (dateString: string): DateArray => {
  return dateString.split('-').map(Number) as DateArray
}

export default onDownloadICalFile
