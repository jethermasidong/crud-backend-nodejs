import crud from "../models/crudModel";

export const create = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
        } = req.body;


        const data = {
        name,
        email,
        password,
    };
    crud.create(data, (err, result) => {
        
    })
    } catch {

    }

} 