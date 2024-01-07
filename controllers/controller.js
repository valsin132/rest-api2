import Ad from '../models/skelbimas.js'


const handleErrors = (err) => {
    let errors = { title: '', about: '', category: '', price: ''};
    if (err.message.includes('validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    };
};


export const ad_get_all = async (req, res) => {
    try {
        const ad = await Ad.find();
        res.status(200).json({ ad });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Serverio klaida' });
    }
};


export const ad_post = async (req, res) => {
    const { title, about, category, price} = req.body;
    try {
        const ad = await Ad.create({ title, about, category, price});
        res.status(201).json({ ad: ad._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    };
};

export const ad_put = (req, res) => {
    Ad.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Ad.findOne({_id: req.params.id})
                .then(ad => res.send(ad))
        })
        .catch(err => console.log(err))
}

export const ad_details_get = (req, res) => {
    Ad.findById(req.params.id)
        .then(async (result) => res.render('edit', { ad: result}))
        .catch(err => console.log(err));
}

export const ad_delete = (req, res) => {
    Ad.findByIdAndDelete({_id: req.params.id})
        .then(ad => res.send(ad))
        .catch(err => console.log(err))
}

