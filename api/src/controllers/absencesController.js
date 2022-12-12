import absences from '../models/absencesModel.js';

export const fetchAbsences = (req, res) => {
    res.json(absences);
};
