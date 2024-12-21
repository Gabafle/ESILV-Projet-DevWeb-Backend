const { Order } = require('../models/order');

exports.post = async (req, res) => {
	try {
		const { clientID, status, articles, totalPrice } = req.body;
		const newOrder = await Order.create({
			clientID,
			status,
			articles,
			totalPrice,
		});
		res.status(201).json(order);
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: "Failed to create order." });
	}
};

exports.get = async (req, res) => {
	const {id} = req.params;
	try {
		const order = await Order.findByPk(id);
		if (!order)
			return res.status(404).json({ message: "Order not found" });
		if (order.clientID !== req.user.id)
			return res.status(403).json({error: 'Unauthorized'});
		res.json(order);

	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch order." });
	}
};

exports.cget = async (req, res) => {
	try {
		const orders = await Order.findAll();
		res.json(orders);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to fetch orders." });
	}
};

exports.patch = async (req, res) => {
	const { id } = req.params;
	const { articles, totalPrice, status } = req.body;
	try {
		const order = await Order.findByPk(id);
		if (!order)
	 		return res.status(404).json({ message: "Order not found" });
		if (order.clientID !== req.user.id) 
			return res.status(403).json({error: 'Unauthorized'});
		await order.update({
			articles,
			totalPrice,
			status,
		});
	} catch (error) {
		console.error(error);
		res.status(400).json({ error: "Failed to update order. Check your input." });
	}
};

exports.delete = async (req, res) => {
	try {
		const { id } = req.params;
		const order = await Order.findByPk(id);
		if (!order)
			return res.status(404).json({ message: 'Order not found' });
		if (order.clientID !== req.user.id)
			return res.status(403).json({error: 'Unauthorized'});
		await order.destroy();
		res.status(204).send();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to delete order." });
	}
};