const boom = require('boom');

module.exports = async (req, res, next) => {
    // if (!req.is('json')) {
    //     const contentType = req.header('Content-Type');
    //
    //     return next(boom.badRequest(`Content-Type "${contentType}" is not supported. Use "application/json" instead.`));
    // }

    const eventType = req.query.type;

    if (!eventType) {
        return next(boom.badRequest('event type is not defined'));
    }

    if (!responseTypes[eventType]) {
        return next(boom.badRequest('no response type'));
    }

    try {
        res.send(responseTypes[eventType]);
    } catch (error) {

        next(error);
    }
};

const responseTypes = {
    empty: {},
    new_price: {
        price: '999 ₽'
    },
    long_price: {
        price: '999999999999999999999999999999999999 ₽'
    },
    max_valid_price: {
        price: '399 921 ₽'
    },
    no_item: {
        buy_visibility_class: 'youla-hidden',
        buy_controls_disabled: true,
        no_items_visible_class: 'youla-visible'
    }
};
