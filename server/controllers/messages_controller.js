let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text,time} = req.body
        messages.push({text, time, id});
        id++
        res.status(200).json(messages)
    },
    read: (req, res) => {
        res.status(200).json(messages)
    },
    update: (req,res) => {
        const {text} = req.body;
        const updateId = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateId)
        let message = messages[messageIndex]
        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).json(messages)
    },
    delete: (req, res) => {
        const deleteId = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == deleteId)
        messages.splice(messageIndex, 1)
        res.status(200).json(messages)
    }
}