import members from '../models/membersModel.js';

export const fetchMembers = (req, res) => {
    res.json(members);
};
