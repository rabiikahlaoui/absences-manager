export default interface Absence {
    id: number
    userId: number
    memberNote: string | null
    crewId: number
    type: "vacation" | "sickness"
    startDate: string
    endDate: string
    createdAt: string
    confirmedAt: string | null
    rejectedAt: string | null
    admitterId: number | null
    admitterNote: string
}
