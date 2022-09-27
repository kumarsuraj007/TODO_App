import TodoSchema from '../Model/Todo.js'

export const CreateToDo = async (req, res) => {
    try {
        const {content} = req.body
        const SaveContent = await TodoSchema.create({content})
        res.json(SaveContent)
    } catch (error) {
        res.json(error) 
    }
};

export const GetToDo = async (req, res) => {
    try {
        const GetContent = await TodoSchema.find()
        res.json(GetContent)
    } catch (error) {
        res.json(error) 
    }
};

export const DeleteToDoById = async (req, res) => {
    try {
        const id = req.params.id;
        const findcontent = await TodoSchema.findById(id);
        if (!findcontent) {
          return res
            .status(400)
            .json({ sucess: false, error: "Todo not found" });
        }
        const adhesives = await TodoSchema.findByIdAndDelete(id);
        res.json({ sucess: true });
    } catch (error) {
        res.json(error) 
    }
};

export const UpdateToDoById = async (req, res) => {
    try {
        const {_id, content} = req.body
        const RemoveById = await TodoSchema.findByIdAndUpdate(_id, {content})
        res.json("Todo Updated")
    } catch (error) {
        res.json(error) 
    }
};

export const DeleteTodo = async (req, res) => {
    try {
         const Del = await TodoSchema.deleteMany({})
         res.json("All Todo Deleted")
    } catch (error) {
        res.json(error)
    }
};