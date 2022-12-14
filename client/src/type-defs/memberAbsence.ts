export default interface MemberAbsence {
    id: number
    name: string
    image: string
    userId: number
    memberNote: string | null
    type: "vacation" | "sickness"
    startDate: string
    endDate: string
    createdAt: string
    confirmedAt: string | null
    rejectedAt: string | null
    status: "Requested" | "Confirmed" | "Rejected"
    admitterId: number | null
    admitterNote: string
}
