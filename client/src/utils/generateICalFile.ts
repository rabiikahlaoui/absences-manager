import { createEvent } from 'ics'
import downloadTextFile from './downloadTextFile'

const onDownloadICalFile: Function = (absence: any): void => {
  const event: any = {
    title: `Absence of ${absence.name as string} - ${absence.startDate as string} to ${absence.startDate as string} - ${absence.type as string}`,
    description: `Member note: ${absence.memberNote as string}\nAdmitter note: ${absence.admitterNote as string}`,
    start: absence.startDate.split('-'),
    end: absence.startDate.split('-')
  }

  createEvent(event, (error: any, value: string) => {
    if (error !== null) {
      console.log(error)
    }

    downloadTextFile(`${absence.name as string}_absence_${absence.startDate as string}_${absence.startDate as string}.ics`, value)
  })
}

export default onDownloadICalFile
