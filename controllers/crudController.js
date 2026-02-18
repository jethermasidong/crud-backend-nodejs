import crud from "../models/crudModel";


//CREATE LOGIC
export const create = async (req, res) => {
    const newData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    crud.create(newData, (err, result) => {
        if (err) throw err;
        res.json({message: 'User created successfully!'});
    });
};


//READ LOGIC
export const read = async (req, res) => {
    crud.read(req.params.id, (err, user) => {
        if (err) throw err;
        res.json(user);
    });
};

//UPDATE LOGIC
export const update = async (req, res) => {
    const updateData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.email,
    };

    crud.update(req.params.id, updateData, (err, result) =>{
        if (err) throw err;
        res.json({message: 'User updated successfully!'});
    });
};


//DELETE LOGIC
export const deletes = async (req, res) => {
    crud.deletes(req.params.id, (err, user) => {
        if(err) throw err;
        res.json({message: 'User deleted successfully!'});
    })
}

