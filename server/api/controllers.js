const utils = require("./utils");

exports.getItems = async (req, res) => {
    try {
        const items = await utils.getItemsByIds(req.body.items);
        return res.status(200).send(items).end();
    } catch (err) {
        console.log(err);
        return res.status(404).end();
    }
}

exports.getItemsWithSize = async (req, res) => {
    try {
        const items = await utils.getItemsByIds(req.body.items.map(item => { return item.id }));
        
        if (items) {
            items.forEach(item => {
                const item__ = req.body.items.find(item_ => { return item_.id === item.id });
                item.size = item__.size;
            });
        }

        return res.status(200).send(items).end();
    } catch (err) {
        console.log(err);
        return res.status(404).end();
    }
}

exports.getItem = async (req, res) => {
    try {
        const item = await utils.getItemsByIds([req.query.id]);
        return res.status(200).send(item).end();
    } catch (err) {
        return res.status(404).end();
    }
}

exports.getAllItems = async (req, res) => {
    try {
        const items = await utils.getAllItems();
        return res.status(200).send(items).end();
    } catch (err) {
        return res.status(404).end();
    }

}

exports.root = (req, res) => {
    return res.status(200).end();
}